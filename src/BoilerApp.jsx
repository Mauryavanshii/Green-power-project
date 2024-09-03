import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

export default function BoilerApp() {
  return (
    <div>
        <Navbar/>
      <Outlet/>
    </div>
  )
}
