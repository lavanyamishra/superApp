import { useState } from "react"


const Notes = ()=>{
    const [text, setText] = useState(JSON.parse(window.localStorage.getItem("text")))
     console.log(text)
    const handleChange=(e)=>{
        setText(e.target.value)
        window.localStorage.setItem("text",JSON.stringify(text))
    }
    return(
      
       <div style={{color:"white",background:"#F1C75B",width:"24vw", position:"absolute" ,top:"1.5rem",left:"35rem", borderRadius:"12px",padding:"6px"}}>
        <p style={{color:"black",fontSize:"2rem"}}>All notes</p>
        <textarea style={{width:"24vw", height:"54vh",margin:"auto", border:"none",background:"transparent", overflowY:"auto",resize:"none"}} value={text} onChange={(e)=>handleChange(e)}/>
        </div>
       
    )
}

export default Notes