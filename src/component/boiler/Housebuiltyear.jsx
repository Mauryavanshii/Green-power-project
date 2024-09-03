
import React from 'react'
import { Link } from 'react-router-dom'

export default function Housebuiltyear() {
  return (
    <div className='bg-indigo-50 h-full text-center fixed w-full relative'>
        <h1 className='text-[20px] font-bold  text-gray-800 text-center p-[10px]'>How many radiators do you have in your home? This will help us calculate an appropriate boiler size<br></br>
        for your property.
            </h1>
        {/* <p>Join the 20,000 happy customers throughout Leinster that have chosen us for the boiler services..</p> */}
        <div className='flex items-center ml-[100px] gap-[20px] flex-wrap'>

      
<Link
to='/boiler/propertyplace/housebuiltyear/fuel' >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="		https://getyourquote.greenenergyhomes.ie/unique-image/radiator%20(2).png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold'>1-4
        </h1>
      </div>
      </Link>
<Link  >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/5-8img.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] font-bold mt-[80px] text-center'>5-8</h1>
      </div>
      </Link>
      <Link >
      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
      outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/5-8radiator.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] font-bold mt-[80px] text-center'>9-12</h1>
      </div>
      </Link>
      <Link
to='/boiler/propertyplace'
 >

      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center
        bg-white flex-col mt-[40px] outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="	https://getyourquote.greenenergyhomes.ie/unique-image/9-12radiator.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold '>13-16</h1>
        {/* <p>Small - Electricity Spend Less than €120,000 / Year</p> */}
      </div>
      </Link>
      <Link
to='/boiler/propertyplace'
 >

      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center
        bg-white flex-col mt-[40px] outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="	https://getyourquote.greenenergyhomes.ie/unique-image/13-16radiator.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold '>17-19</h1>
        {/* <p>Small - Electricity Spend Less than €120,000 / Year</p> */}
      </div>
      </Link>
      <Link
to='/boiler/propertyplace'
 >

      <div class='h-[320px] w-[270px] rounded-[10px] flex items-center justify-center
        bg-white flex-col mt-[40px] outline outline-0 hover:outline-1 hover:outline-blue-500 '>
        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/19+radiator.png" 
        alt="" class='h-[100px] w-[90px] ' />

        <h1 class='text-[15px] mt-[80px] text-center font-bold '>19+</h1>
        {/* <p>Small - Electricity Spend Less than €120,000 / Year</p> */}
      </div>
      </Link>
      </div>
    </div>
  )
}
