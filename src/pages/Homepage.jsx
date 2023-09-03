import React from 'react'
import Banner from '../components/home/banner'
import Form from '../components/home/form'
import '../pages/Homepage.css'

const HomePage = ()=>{
  return(
  
      <div style={{display:"flex" ,backgroundColor:"black"}
      }>
        <div className='bannerarea'>
      <Banner/>
      </div>
      <div className='hpForm'> <Form/></div>
     
      </div>
  )
  
}
export default HomePage
