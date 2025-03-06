import { useState } from 'react'
import './App.css'
import Home from './oldalak/Home'
import {Header}  from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Felvettek from './oldalak/Felvettek';




function App() {
  

  return (
    <>
    <Header/>
    <Navbar/>  
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/felvettek" element={<Felvettek/>} />
       </Routes>
    </>
  )
}

export default App
