import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import { Navbar } from './componets/Navbar/Navbar'
import { Footer } from './componets/Footer/Footer'

function App() {

  return (
    <div className='main'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
