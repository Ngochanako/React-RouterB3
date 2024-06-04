
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Contact from './pages/Contact'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Bai2 from './pages/Bai2'
import Bai3 from './pages/Bai3'
import Services from './pages/Services'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='/bai2' element={<Bai2/>}>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
        </Route>
        <Route path='/bai3' element={<Bai3/>}>
          <Route index element={<Services/>}/>
          <Route />
        </Route>
      </Routes>
    </div>
  )
}
