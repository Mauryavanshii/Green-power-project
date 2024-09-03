import React from 'react'

export default function from() {
    return (
        <div>
            <section>
                <div class="flex items-center justify-center bg-indigo-50 h-[89vh]">
                    <div class="w-[1000px] h-[89vh] bg-white mt-[5px]   shadow-gray-400 shadow-xl ">
                    <h1 className='text-[20px] font-bold mt-[40px] text-gray-600 text-center'>Alright, let's get your details and create your tailored Solar PV estimate!</h1>
                        <form action="#" method="POST" class="mt-8">
                            <div class="space-y-5 flex items-center justify-center gap-[20px] flex-col">
                                <div class='flex items-center justify-center gap-[20px]'>
                                    <div>
                                        <label for="name" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Full Name{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Full Name"
                                                id="name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label for="name" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Last Name{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Last Name"
                                                id="name"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class='flex items-center justify-center gap-[20px]'>
                                    <div>
                                        <label for="phone" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Phone{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Phone Number"
                                                id="phone"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="email" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Email address{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="email"
                                                placeholder="Email"
                                                id="email"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class='flex items-center justify-center gap-[20px]'>
                                    <div>
                                        <label for="phone" class="text-base font-medium text-gray-900">
                                            {" "}
                                            EirCode{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="EirCode"
                                                id="eircode"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label for="country" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Country{" "}
                                        </label>
                                        <div class="mt-2">
                                            <select name="counties" class="flex h-10 w-[300px] rounded-md border border-gray-300 bg-transparent px-3 py-2 
            text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 
            disabled:cursor-not-allowed disabled:opacity-50">
                                                <option value="antrim">Antrim</option>
                                                <option value="armagh">Armagh</option>
                                                <option value="carlow">Carlow</option>
                                                <option value="cavan">Cavan</option>
                                                <option value="clare">Clare</option>
                                                <option value="cork">Cork</option>
                                                <option value="derry">Derry</option>
                                                <option value="donegal">Donegal</option>
                                                <option value="down">Down</option>
                                                <option value="dublin">Dublin</option>
                                                <option value="fermanagh">Fermanagh</option>
                                                <option value="galway">Galway</option>
                                                <option value="kerry">Kerry</option>
                                                <option value="kildare">Kildare</option>
                                                <option value="kilkenny">Kilkenny</option>
                                                <option value="laois">Laois</option>
                                                <option value="leitrim">Leitrim</option>
                                                <option value="limerick">Limerick</option>
                                                <option value="longford">Longford</option>
                                                <option value="louth">Louth</option>
                                                <option value="mayo">Mayo</option>
                                                <option value="meath">Meath</option>
                                                <option value="monaghan">Monaghan</option>
                                                <option value="offaly">Offaly</option>
                                                <option value="roscommon">Roscommon</option>
                                                <option value="sligo">Sligo</option>
                                                <option value="tipperary">Tipperary</option>
                                                <option value="tyrone">Tyrone</option>
                                                <option value="waterford">Waterford</option>
                                                <option value="westmeath">Westmeath</option>
                                                <option value="wexford">Wexford</option>
                                                <option value="wicklow">Wicklow</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                <div>
                                        <label for="phone" class="text-base font-medium text-gray-900">
                                            {" "}
                                            Address{" "}
                                        </label>
                                        <div class="mt-2">
                                            <input
                                                class="flex h-10 w-[610px] rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                                type="text"
                                                placeholder="Address"
                                                id="address"
                                            />
                                        </div>
                                    </div>

                                <div>
                                   

                                    <button className=' w-[610px] h-[40px] bg-blue-400 p-[10px] text-white rounded-[10px] '>View Estimated Prices</button>
                                </div>

                            </div>
                        </form>

                    </div>
                </div>
            </section>

        </div>

    )
}
