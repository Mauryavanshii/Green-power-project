
import React from 'react'
import { Link } from 'react-router-dom'

export default function SmallPro() {
  return (
    <div className='flex items-center justify-center bg-blue-100 h-[89vh] flex-col'>
        <h1 className='text-[20px] font-bold  text-gray-800 text-center p-[10px]'>When do you use your home the most?
            </h1>
        {/* <p>A warm welcome to Green Energy Home , Ireland's highest rated Solar PV installer.</p> */}
        <div className='flex items-center justify-center gap-[20px]'>
<Link 
to='/solar/business/smallpro/morning'
>
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center
        bg-white flex-col mt-[40px] outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/morning.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold '>MORNING</h1>
        {/* <p>Small - Electricity Spend Less than €120,000 / Year</p> */}
      </div>
      </Link>
      
<Link >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="	https://getyourquote.greenenergyhomes.ie/unique-image/noon.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold'>AFTER NOON
        </h1>
      </div>
      </Link>
<Link >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/moon.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] font-bold mt-[80px] text-center'>EVENING</h1>
      </div>
      </Link>
      <Link >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/24-hours.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] font-bold mt-[80px] text-center'>ALL-Day</h1>
      </div>
      </Link>
      </div>
    </div>
  )
}
