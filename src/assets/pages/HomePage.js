import React from "react";
// import { RenderList } from "../assets/components/renderList/RenderList";
import SearchImage from '../img/Search.svg'
import EditImage from "../img/Edit.svg"
import SaveImage from "../img/Save.svg"
import TrashImage from '../img/Trash.svg'
import { useState } from "react";
import { RenderList } from "../components/RenderList";
import { useEffect } from "react";
export const HomePage = () => {

  const [lastId, setLastId] = useState(10); // id data default ada 10
const [status, setstatus] = useState("All")
  const [InputValue, setInputValue] = useState("")
  const [data, setdata] = useState([
    {
      id: 1,
      task: "nyuci mobil",
      complete: true
    },
    {
      id: 2,
      task: "memberi makan kucing",
      complete: true
    },
    {
      id: 3,
      task: "olahraga 10 menit",
      complete: false
    },
    {
      id: 4,
      task: "sarapan sereal",
      complete: true
    },
    {
      id: 5,
      task: "belanja harian",
     complete: false
    },
    {
      id: 6,
      task: "ngeprint tugas",
     complete: false
    },
    {
      id: 7,
      task: "bayar tagihan bulanan",
     complete: false
    },
    {
      id: 8,
      task: "berangkat kuliah",
     complete: false
    },
    {
      id: 9,
      task: "les bahasa Inggris",
     complete: true
    },
    {
      id: 10,
      task: "ke rumah Sabrina",
      complete: false
    }
  ])
  const [dataAwal, setdataAwal] = useState([])
  const [dataSearch, setdataSearch] = useState()

  useEffect(() => {
    setdataAwal(data)
  }, [])
  
       
  const searchData = () =>{
    setdata(dataAwal.filter(value =>
      value.task.includes(dataSearch)
      ))
  } 

  const RenderSubmit = () => {
    const dataInput = InputValue;
  
    // Increment  id 
    const newId = lastId + 1;
    setLastId(newId);
  
    const dataBaru = [
      ...data,
      {
        id: newId,
        task: dataInput,
        complete: false,
      },
    ];
  
    setdata(dataBaru);
  

    setInputValue("");
  

  };

  const deleteTask = (taskId) => {
    const updatedData = data.filter((task) => task.id !== taskId)
    setdata(updatedData);
  };
  const onUpdateTask = (updatedTask) => {
    const updatedData = data.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
  
    setdata(updatedData);
  };
  


//function unutuk render list
const renderList = () => {
  let filterData = data;
  
  if (status === "Done") {
    filterData = data.filter((task) => task.complete === true);
  } else if (status === "Todo") {
    filterData = data.filter((task) => task.complete === false);
  }
return filterData.map((value)=>{
  return <RenderList  key={value.id} onUpdateTask={onUpdateTask} onDelete={deleteTask} data={value} dataAll={data} functionDelete={setdata} editImage={EditImage} saveImage={SaveImage} trashImage={TrashImage}/>

})
}

const hapusDoneTask = () => {
  const updatedData = data.filter((task) => !task.complete);
  setdata(updatedData);
};

const hapusAllTasks = () => {
  setdata([]);
};

useEffect(() => {
  console.log(data)
 
  
}, [data])



  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black h-[38rem] w-[40rem] flex flex-col space-y-3 items-center">
        <h1 className="font-bold">TodoSearch</h1>
        <div className="border w-[90%] h-24 flex flex-row">
          <div className=" w-[65%] h-[100%] flex flex-col justify-around px-4">
            <div className=" flex ">
              <button  onClick={()=>{searchData()}}  className="border w-1/5 h-8 flex items-center justify-center bg-cyan-400 "  >
                <img src={SearchImage} alt="search" className="w-[1em]"/>
              </button>
              <input
              onChange={(e)=> {setdataSearch(e.target.value)}}
                type="text"
                placeholder="   Search Todo"
                className=" w-4/5 h-8"
              />
            </div>
            <button onClick={()=>{searchData()}} className="w-full bg-cyan-400 h-8">Search</button>
          </div>
          <div className="flex  flex-col  justify-evenly items-center w-[35%] ">
          <input type="text"  className="border" value={InputValue} onChange={(e)=> {setInputValue(e.target.value)}}/>
            <button className="bg-cyan-400 h-8 w-3/4" onClick={()=>{RenderSubmit()}}>Add New Task</button>
          </div>
        </div>
        <h1 className="font-bold">TodoList</h1>
        <div className=" w-[90%] h-16 flex justify-between">
          <button className="bg-cyan-400 w-3/12 h-8 "onClick={() => setstatus("All")}>All</button>
          <button className="bg-cyan-400 w-3/12 h-8"  onClick={() => setstatus("Done")}>Done</button>
          <button className="bg-cyan-400 w-3/12 h-8" onClick={() => setstatus("Todo")}>Todo </button>
        </div>
        <div className="border border-fuchsia-600 w-[90%] h-60 overflow-y-auto">
        {renderList()}
        </div>

        <div className=" w-[90%] h-10 flex justify-between">
            <button onClick={hapusDoneTask} className="bg-orange-600 w-[45%] " >Delate Done Task</button>
            <button onClick={hapusAllTasks} className="bg-orange-600 w-[45%]" >Delate All Task</button>
        </div>
      </div>
      {/* <input type="text" value={InputValue} onChange={(e)=> {setInputValue(e.target.value)}} className="border"/>
          <button className="border bg-slate-400" onClick={()=>{RenderSubmit()}}>submit</button> */}
   


        

    </div>
  );
};
