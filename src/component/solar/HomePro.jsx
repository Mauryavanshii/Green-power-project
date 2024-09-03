
import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePro() {
  return (
    <div className='flex items-center justify-center bg-blue-100 h-[89vh] flex-col'>
        <h1 className='text-[20px] font-bold  text-gray-800 text-center p-[10px]'>Which option best describes your property?
            </h1>
        {/* <p>Join the 20,000 happy customers throughout Leinster that have chosen us for the boiler services..</p> */}
        <div className='flex items-center justify-center gap-[20px]'>

        <Link
        to='/solar/homepro/story'  >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] font-bold mt-[80px] text-center'>Story</h1>
      </div>
      </Link>
      <Link  >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="	" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] font-bold mt-[80px] text-center'>Two Stories</h1>
      </div>
      </Link>
<Link >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="		" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold'>Three-stories
        </h1>
      </div>
      </Link>

   
      <Link
to='/boiler/propertyplace'
 >

      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center
        bg-white flex-col mt-[40px] outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/apartment.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold '>Apartment</h1>
        {/* <p>Small - Electricity Spend Less than €120,000 / Year</p> */}
      </div>
      </Link>
      </div>
    </div>
  )
}
