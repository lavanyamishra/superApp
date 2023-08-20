import React from 'react'
import Homepage from './pages/Homepage'
import {Routes,Route} from "react-router-dom"
import Selectcategory from './pages/selectcategory'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/selectcategory' element={<Selectcategory/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
