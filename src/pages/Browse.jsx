import React from 'react'
import "./Browse.css"
import Info from '../components/Browse/Info'
import Weather from '../components/Browse/Weather'
import Timer from '../components/Browse/Timer'
import Notes from "../components/Browse/Notes"
import News from '../components/Browse/News'
import { useNavigate } from 'react-router-dom'
const Browse = () => {
  const navigate = useNavigate()
    const handleClick = ()=>{
        navigate('/movies')
    }
  return (
   <div className="main">
    <div className="Section">
    <div>
         <Info/>
          <Weather/>
        <Timer/> 
    </div>
  
    <div>
            <Notes/>
</div>
     <div>
            <News/>
        </div>

        </div>
        <button style={{width:"8rem",position:"absolute",bottom:"2vh",right:"6vw",background:"green",border:"none",color:"white",padding:"8px",borderRadius:"12px"}} onClick={handleClick}>Browse</button>
   </div>
  )
}

export default Browse