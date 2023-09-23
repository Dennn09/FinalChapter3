import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
// import { Model } from '../components/Model'

export const RouterList = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            {/* <Route path='model' element={<Model/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}
