import React from 'react'
import './Selectedmovie.css'
function Selectedmovie({title,onClick}) {
  return (
    <button className='Selectedmovie-btn'>{title}  &nbsp; <span onClick={onClick}>x</span></button>
  )
}

export default Selectedmovie