import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Bai2() {
  return (
    <div>
      <div style={{display:'flex',gap:'20px'}}>
        <a href=""><Link to={'about'}>About</Link></a>
        <a href=""><Link to={'contact'}>Contact</Link></a>
      </div>
      <Outlet/>
    </div>
  )
}
