import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './component/Navbar'

export default function SolarApp() {
  return (
    <div>
        <Navbar/>
      <Outlet/>
    </div>
  )
}
