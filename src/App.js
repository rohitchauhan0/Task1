import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Navbar from './Component/Common/Navbar'

const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  )
}

export default App