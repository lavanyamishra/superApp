import React, { useState } from 'react'
import  './form.css'

const Form=() =>{
  
  const[formValues,SetformValues]=useState(
    {
      name:"",
      username:"",
      email:"",
      mobile:"",
      check:""
    }
    )
  const [nameError, setNameError] = useState(false)
  const [userNameError, setUserNameError] = useState(false)
  const [mailError, setEmailError] = useState(false)
  const [mobileError, setMobileError] = useState(false)
  const [signUpError, setSignUpError] = useState(false)
  const handleChange = (e)=>{
    SetformValues({...formValues,[e.target.name]:e.target.value})
}
  const handleSubmit=(e)=>{
    e.preventDefault();
    let valid = true;
        if(!(formValues.name.trim().length>0)){
            setNameError(true)
            valid = false;
        }else{
            setNameError(false)
        }
        if(!(formValues.username.trim().length>0)){
          setUserNameError(true)
          valid = false;
          
      }else{
          setUserNameError(false)
      }
      if(!(formValues.email.trim().length>0)){
        setEmailError(true)
        valid = false;
    }else{
        setEmailError(false)
    }
    if(!(formValues.mobile.trim().length===10)){
      setMobileError(true)
      valid = false;
   
  }else{
      setMobileError(false)
  }
  if(!(formValues.check)){
    setSignUpError(true)
    valid = false;
 
}else{
    setSignUpError(false)
}
if(valid)
{
    window.localStorage.setItem("userData",JSON.stringify(formValues))
 
}
  }
  return (
    <div className='body'>
        <p className='super'>Super App</p>
            <p>Create a new Account</p>
            <form>
            <input type="text" placeholder='Name' name="name"onChange={(e)=>handleChange(e)} />
            {nameError?<p className='error'>Field Required</p>:<></>}
            <input type="text" placeholder='Username'  name="username"onChange={(e)=>handleChange(e)} />
            {userNameError?<p className='error'>Field Required</p>:<></>}
            <input type="email" placeholder='Email'  name="email"onChange={(e)=>handleChange(e)} />
            {mailError?<p className='error'>Field Required</p>:<></>}
            <input type="tel" placeholder='Mobile'  name="mobile"onChange={(e)=>handleChange(e)} />
            {mobileError?<p className='error'>Field Required</p>:<></>}
            <label>
                <input type="checkbox"name='check'onChange={(e)=>SetformValues( {...formValues,[e.target.name]:e.target.checked})}  />
            
                Share my registration data with Superapp
            </label>
            {signUpError?<p className='error'>Check this box if you want to proceed</p>:<></>}
            <button className='buton' onClick={(e)=>{handleSubmit(e)}}>SIgn up</button>
            </form>
            <footer className='footer'>
                <p>By clicking on Sign up. you agree to Superapp<span style={{color:"green"}}> Terms and Conditions of Use</span></p>
                <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp<span style={{color:"green"}}> Privacy Policy</span></p>
            </footer>
    </div>
  )
}

export default Form
