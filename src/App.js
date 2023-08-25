import React from 'react'
import Homepage from './pages/Homepage'
import {Routes,Route} from "react-router-dom"
import Selectcategory from './pages/selectcategory'
import Browse from './pages/Browse'
import Movies from './components/Movies/Movies'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/selectcategory' element={<Selectcategory/>}></Route>
        <Route path='/Browse' element={<Browse/>}></Route>
        <Route path='/Movies' element={<Movies/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
