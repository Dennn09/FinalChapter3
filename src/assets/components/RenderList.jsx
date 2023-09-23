import React from "react";
import { useState } from "react";


export const RenderList = (props) => {
  const [onCheck, setOnCheck] = useState(props.data.complete);
  const [Nama, setNama] = useState(props.data.task);
  const [OnEdit, setOnEdit] = useState(false);

//   const deleteData = () => {
//   props.functionDelete(
//     props.dataAll.filter((value) => value.nama !== props.data.nama)
//   );
// };
const deleteTask = () => {
  // memanggil fungsi onDelete 
  props.onDelete(props.data.id)
};

const checkChange = () => {
  setOnCheck(!onCheck);

  const updatedTask = {
    ...props.data,
    complete: !onCheck,
  };

  // Panggil onUpdateTask untuk memperbarui tugas
  props.onUpdateTask(updatedTask);
};
  return (
    <div className={`w-[100%] h-11 space-y-2 p-2 border border-y-purple-100 flex justify-between ${onCheck ? "line-through text-red-500" : ""} `}>
       { OnEdit ? <input value={Nama} onChange={(e)=>{setNama(e.target.value)}} type="text" autoFocus className='w-2/3'/> :  <span>{Nama}</span> }
      <div className="space-x-1.5 flex items-center">
        <input className="w-[1em]" type="checkbox" checked={onCheck} onChange={checkChange} />
        <button onClick={()=>{setOnEdit(!OnEdit)}}> {OnEdit ? <img src={props.saveImage} alt ="Save" className="w-[1em]"/> :  <img src={props.editImage} alt="Edit" className="w-[1em]" /> } </button>
        <button onClick={() => deleteTask(props.data.id)}><img src={props.trashImage} alt="save" className="w-[1em]"/></button>
      </div>
    </div>
  );
};


