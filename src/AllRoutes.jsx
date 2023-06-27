import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from "./components/pages/Home"
import About from "./components/pages/About";
import Contact from './components/pages/Contact';
import Download from './components/pages/Download';
const AllRoutes = () => {
  return (
      <Routes>
<Route exact path="/" element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Contact' element={<Contact/>}/>
<Route path='/Download' element={<Download/>}/>


      </Routes>
  )
}

export default AllRoutes