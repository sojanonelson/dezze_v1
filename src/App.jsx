import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Navbar'
import AllRoutes from './AllRoutes'
const App = () => {
  return (
    <div>
      <Router>
      <Navbar/>
      <AllRoutes/>
     </Router>
    </div>
  )
}

export default App