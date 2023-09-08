import React from 'react'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";
import { useEffect,useState } from 'react';
import Up from "../../assets/up.png"
import down from "../../assets/down.png"

const Timer = () => {
  
        const [inputHour, setInputHour] = useState(0);
        const [inputMinutes, setInputMinutes] = useState(0);
        const [inputSeconds, setInputSeconds] = useState(0);
        const [timerIsStart, setTimerIsStart] = useState(false);
        const [time, setTime] = useState(0);
        useEffect(() => {
            if (time > 0) {
              const interval = setInterval(() => {
                setTime((time) => time - 1);
              }, 1000);
              return () => clearInterval(interval);
            } else {
              setInputMinutes(0);
              setInputHour(0);
              setInputSeconds(0);
             
            }
          }, [time]);
          const totalInputTimeInSeconds =
          inputHour * 60 * 60 + inputMinutes * 60 + inputSeconds;
      
       
        const showTimer = (totalTimeInSeconds) => {
            const hour = Math.floor(totalTimeInSeconds / 3600);
            totalTimeInSeconds %= 3600;
            const min = Math.floor(totalTimeInSeconds / 60);
            const sec = totalTimeInSeconds % 60;
            return `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${
              sec < 10 ? "0" + sec : sec
            }`;
          };
          const increaseHour = () => {
            if (inputHour < 12) setInputHour(inputHour + 1);
          };
          const increaseMinute = () => {
            if (inputMinutes < 59) {
              setInputMinutes(inputMinutes + 1);
            } else {
              setInputMinutes(0);
              setInputHour(inputHour + 1);
            }
          };
          const increaseSecond = () => {
            if (inputSeconds < 59) {
              setInputSeconds(inputSeconds + 1);
            } else {
              setInputSeconds(0);
              setInputMinutes(inputMinutes + 1);
            }
            if (inputMinutes > 59) {
              setInputMinutes(0);
              setInputHour(inputHour + 1);
            }
          };
          const decreaseHour = () => {
            if (inputHour > 0) setInputHour(inputHour - 1);
          };
          const decreaseMinute = () => {
            if (inputMinutes > 0) {
              setInputMinutes(inputMinutes - 1);
            } else {
              if (inputHour > 0) {
                setInputMinutes(59);
                setInputHour(inputHour - 1);
              } else {
                setInputHour(0);
              }
            }
          };
          const decreaseSecond = () => {
            if (inputSeconds > 0) {
              setInputSeconds(inputSeconds - 1);
            } else {
              if (inputMinutes > 0) {
                setInputSeconds(59);
                setInputMinutes(inputMinutes - 1);
              } else {
                setInputMinutes(0);
              }
              if (inputHour > 0) {
                setInputMinutes(59);
                setInputSeconds(59);
                setInputHour(0);
              }
            }
          }; 
         

  return (
      <div className="timer_main">
      <div className="timer">
        <div className="timer_container">
          <CountdownCircleTimer
             isPlaying={timerIsStart ? true : false}
             duration={totalInputTimeInSeconds}
             colors={["#FF6A6A"]}
          
          >
            {({ remainingTime }) => <p> {showTimer(time)}</p>}
          </CountdownCircleTimer>
        </div>
      </div>
      <div style={{width:"40vw", textAlign:"center"}}>
                <div style={{color:"white",display:"flex", fontSize:"1.5rem" ,justifyContent:"space-evenly"}}>
                    <div style={{textAlign:"center", padding:"6px",marginTop:"1rem"}}>
                        <p>Hours</p>
                        <img style={{width:"20px",height:"20px",marginBottom:"1rem"}} onClick={increaseHour}   src={Up} alt=''/>
                        <p>{inputHour}</p>
                        <img style={{width:"20px",height:"20px",position:"relative",top:"0rem" }} onClick={decreaseHour}  src={down}alt=''/>
                    </div>
                    <div style={{textAlign:"center", padding:"6px",marginTop:"1rem"}}>
                        <p>Minutes</p>
                        <img style={{width:"20px",height:"20px",marginBottom:"1rem" }} onClick={increaseMinute}  src={Up}alt=''/>
                        <p>{inputMinutes}</p>
                        <img style={{width:"20px",height:"20px",position:"relative",top:"0rem"}} onClick={decreaseMinute}  src={down}alt=''/>
                    </div>
                   <div style={{textAlign:"center",padding:"6px",marginTop:"1rem"}}>
                        <p>Seconds</p>
                        <img style={{width:"20px",height:"20px",marginBottom:"1rem" }} onClick={increaseSecond}  src={Up}alt=''/>
                        <p>{inputSeconds}</p>
                        <img style={{width:"20px",height:"20px",position:"relative",top:"0rem" }} onClick={decreaseSecond}  src={down} alt=''/>
                    </div>
                </div>
                <div onClick={()=>setTimerIsStart((prev)=>!prev)} className='btn' style={{background:"#FF6A6A", borderRadius:"12px", padding:"6px", color:"white", textAlign:"center", width:"20rem",height:"1.5rem",marginLeft:"3rem",marginBottom:"2rem"}}>
                    {timerIsStart?<p>Pause</p>:<p>Start</p>}
                </div>
            </div>
      </div>
  )
}

export default Timer