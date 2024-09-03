import React from 'react'
import { Link } from 'react-router-dom'

export default function Solar() {
    return (
        <div className='flex items-center justify-center bg-blue-100 h-[89vh] flex-col'>
            <h1 className='text-[20px] font-bold  text-gray-800 text-center p-[10px]'>We will get you a Solar PV estimate in seconds.
                Let's start by telling us where you would like to  <br /> have
                Solar PV installed?</h1>
            <p>A warm welcome to Green Energy Home , Ireland's highest rated Solar PV installer.</p>
            <div className='flex items-center justify-center gap-[20px]'>
                <Link 
                to='/solar/business'>
                    <div class='h-[360px] w-[300px] rounded-[10px] flex items-center justify-center
      outline outline-0 hover:outline-1 hover:outline-blue-500  bg-white flex-col mt-[40px] '>
                        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/business.png"
                            alt="" class='h-[100px] w-[90px] ' />

                        <h1 class='text-[20px] mt-[80px] font-bold'>Business</h1>
                    </div>
                </Link>
                <Link
                to='/solar/homepro' >
                    <div class='h-[360px] w-[300px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px]
       outline outline-0 hover:outline-1 hover:outline-blue-500 '>
                        <img src="	https://getyourquote.greenenergyhomes.ie/unique-image/home-page%20(1).png"
                            alt="" class='h-[100px] w-[90px] ' />

                        <h1 class='text-[20px] mt-[80px] font-bold'>Home</h1>
                    </div>
                </Link>
                <Link >
                    <div class='h-[360px] w-[300px] rounded-[10px] flex items-center justify-center  bg-white flex-col mt-[40px] 
      outline outline-0 hover:outline-1 hover:outline-blue-500'>
                        <img src="https://getyourquote.greenenergyhomes.ie/unique-image/house.png"
                            alt="" class='h-[100px] w-[90px] ' />

                        <h1 class='text-[20px] mt-[80px] font-bold'>Farm</h1>
                    </div>
                </Link>
            </div>
        </div>
    )
}
