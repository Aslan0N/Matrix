import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Common/Header";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Todo from '../Pages/Todo';

const AppRouter = () => {
  return (
    <>
        <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/todo' element={<Todo/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter