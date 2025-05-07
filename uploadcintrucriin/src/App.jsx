import React from 'react'
import { BrowserRouter ,Route ,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import OurServeise from './components/OurServeise'
import About from './components/About'
import Selll from './components/Selll'
const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/our-serveise' element={<OurServeise/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/sell' element={<Selll/>} />
         
      </Routes>   
       </BrowserRouter>
  )
}

export default App
