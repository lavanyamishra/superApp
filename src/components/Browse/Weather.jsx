import React, { useEffect, useState } from 'react'
import "./Weather.css"
const Weather = () => {
    const[date,setDate]=useState("")
    const[time,setTime]=useState("")
    const [weather, setWeather] = useState(false)
    
    useEffect(()=>{
        const today = new Date();
        const showTime = today.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
    setTime(showTime);
},[])
useEffect(()=>{
    const today = new Date();
    const date =
    today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear();
setDate(date);
},[])
const getData= async()=>{
    const data=await fetch(
        "https://api.weatherapi.com/v1/current.json?key=b9f9ec7c8d9049b99ec52929231404&q=jaunpur&aqi=no"

    );
    const result=await data.json();
    setWeather(result);
    console.log(result)
}
useEffect(()=>{
    getData()
},[])
  return (
    <div className='weatherMain'>
        <div className="timeInfo">
            <span>{date}</span>
            <span>{time}</span>


        </div>
        <div>
            {weather?<div className="weatherInfo">
               <div>
                <img src={weather.current.condition.icon} className="condition"alt="" />
               <p>{weather.current.condition.text}</p>
               </div>
               <div>
                <p className='temp'><span>{weather.current.temp_c}</span>&nbsp;C</p>
                <p>{weather.current.pressure_mb} pressure</p>
               </div>
               <div>
                    <p style={{marginBottom:"12px", fontSize:"24px", marginTop:"10px"}}>{weather.current.wind_kph} wind</p>
                    <p>{weather.current.humidity} humidity</p>
                </div>
            </div>:<></>}
        </div>
    </div>
  )
}

export default Weather