import React from 'react'
import  "./banner.css"
 import BackgroundImage from "../../assets/img1.png"
const Banner = ()=>{
    return(
        <> 
        <div className='top'>
           <p>Discover new things on Superapp</p></div>
            <img className='image1' src={BackgroundImage} alt='bgimage'/>

          
        </>
    )
}

export default Banner

