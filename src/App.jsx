import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Landing from './Pages/Landing'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
     
    </>
  )
}

export default App
