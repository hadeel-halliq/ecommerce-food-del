import { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

export default function LoginPopup({setShowLogin}) {

  const [currState, setCurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img src={assets.cross_icon}  onClick={() => setShowLogin(false)}/>
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? <></> : <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='Password' required />
        </div>
        <button>{currState === "Sign Up" ? "Create account": "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i  agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ?  
        <p>Create a new account ? <span onClick={() => setCurrState("Sign UP")}>Click here</span></p> :
        <p>Already have an account ? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
        
      </form>
    </div>
  )
}
