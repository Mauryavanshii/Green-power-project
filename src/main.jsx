import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './component/Home.jsx'
import SolarApp from './SolarApp.jsx'
import BoilerApp from './BoilerApp.jsx'
import Solar from './component/solar/Solar.jsx'
import Business from './component/solar/Business.jsx'
import SmallPro from './component/solar/SmallPro.jsx'
import Morning from './component/solar/Morning.jsx'
import Bill from './component/solar/Bill.jsx'
import Form from './component/solar/Form.jsx'
import Boiler from './component/boiler/Boiler.jsx'
import PropertyPlace from './component/boiler/PropertyPlace.jsx'
import Housebuiltyear from './component/boiler/Housebuiltyear.jsx'
import Fuel from './component/boiler/Fuel.jsx'
import Time from './component/boiler/Time.jsx'
import BoilerFrom from './component/boiler/BoilerFrom.jsx'
import HomePro from './component/solar/HomePro.jsx'
import Story from './component/solar/Story.jsx'

const router=createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/'  element={<Home/>}/>

    <Route path='/solar' element={<SolarApp/>}>
    <Route path='' element={<Solar/>}/>

    <Route path='/solar/homepro' element={<HomePro/>}/>
    <Route path='/solar/homepro/story' element={<Story/>}/>




    
    <Route path='/solar/business' element={<Business/>}/>
    <Route path='/solar/business/smallpro' element={<SmallPro/>}/>
    <Route path='/solar/business/smallpro/morning' element={<Morning/>}/>
    <Route path='/solar/business/smallpro/morning/bill' element={<Bill/>}/>
    <Route path='/solar/business/smallpro/morning/bill/from' element={<Form/>}/>
    
     

    </Route>

    <Route path='/boiler' element={<BoilerApp/>}>
    <Route path='' element={<Boiler/>}/>
    <Route path='/boiler/propertyplace' element={<PropertyPlace/>}/>
    <Route path='/boiler/propertyplace/housebuiltyear' element={<Housebuiltyear/>}/>
    <Route path='/boiler/propertyplace/housebuiltyear/fuel' element={<Fuel/>}/>
    <Route path='/boiler/propertyplace/housebuiltyear/fuel/time' element={<Time/>}/>
    <Route path='/boiler/propertyplace/housebuiltyear/fuel/time/boilerfrom' element={<BoilerFrom/>}/>





    </Route>

    </>
  )
  
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
