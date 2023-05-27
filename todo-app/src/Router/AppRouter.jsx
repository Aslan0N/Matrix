import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Common/Header";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Alternative from '../Pages/Alternative';

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/alternative' element={<Alternative/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter