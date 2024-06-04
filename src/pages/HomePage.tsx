import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <p>Bài 1</p>
      <ul>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
      </ul>
      <Link to={'/bai2'}>Bài 2</Link>
      <br />
      <Link to={'/bai3'}>Bài 3</Link>
    </div>
  )
}
