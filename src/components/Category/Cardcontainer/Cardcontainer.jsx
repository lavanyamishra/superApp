import React from 'react'
import './Cardcontainer.css'
function CardContainer({children}) {
  return (
    <div className='Card-container'>{children}</div>
  )
}

export default CardContainer