import React from 'react'
import Profile from "../../assets/profile.png"
import "./Info.css"
const Info = () => {
    const info=JSON.parse(window.localStorage.getItem("userData"))
    const genre=JSON.parse(window.localStorage.getItem("userGenere"))
  return (
    <div className='infoMain'>
<div>
    <img src={Profile} alt="profileimg" />
</div>
<div style={{display:"flex",flexDirection:"column",gap:"12px"}}>
            <p style={{color:'white',fontSize:"2rem"}}>{info.name}</p>
            <p style={{color:'white',fontSize:"1.5rem"}}>{info.email}</p>
            <p style={{color:'white',fontSize:"3rem"}}>{info.username}</p>
           
            <div className="selected_categorie">
          <div className="selected_genere">
            {genre?.map((value, i) => {
              return <p key={i}>{value}</p>;
            })}
          </div>
        </div>

        </div>
    </div>
  )
}


export default Info