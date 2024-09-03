import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Home() {
  return (
    <>
    {<Navbar/>}

    <div className='flex items-center flex-col w-full h-[89vh]  bg-blue-100 '>
        <h1 className='text-4xl color-#000000 font-bold mt-10'>Choose your service</h1>
        <p className='text-1px mt-3'>Get your free online estimate in seconds</p>
        <div className='flex items-center justify-center gap-6'>
            <div className='h-96 w-80 flex  flex-col items-center bg-gray-400	mt-10'>
                <img className='h-36 w-36 mt-10' src="https://getyourquote.greenenergyhomes.ie/unique-image/transparentsolarpv.png" alt="" />
               <p className='text-4xl mt-9 '> Solar PV</p>
               <Link
               to='/solar'
               className='h-10 w-48 rounded-full text-white p-2 text-center mt-10 hower:bg-red-900 bg-blue-300'>Get Estimate</Link>
            </div>

            <div className='h-96 w-80 flex  flex-col items-center bg-gray-400	mt-10'>
                <img className='h-36 w-36 mt-10' src="https://getyourquote.greenenergyhomes.ie/custom-image/bolier(main).webp" alt="" />
               <p className='text-4xl mt-9 '> Boilers</p>
               <Link
               to='/boiler'
               className='h-10 w-48 rounded-full text-white p-2 text-center mt-10 hower:bg-red-900 bg-blue-300'>Get Estimate</Link>
            </div>
        </div>
      
    </div>
    </>
  )
}
