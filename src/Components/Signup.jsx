import React from 'react'
import './Signup.css'
import { Link } from "react-router-dom";

const Signup = () => {
  return (
<div className="container">
<form>
  <h1>Sign Up</h1>
  <h5>Echo the Beat, Feel the Vibe!</h5>
  <div className="mb-2">
    <input type="text" className="form-control2" placeholder='First Name'/>
    <input type="text" className="form-control2" placeholder='Second Name'/>
  </div>
  <div className="mb-3">
    <input type="email" className="form-control3" aria-describedby="emailHelp" placeholder='Enter Your Email Address'/>
  </div>
   <div className="mb-3">
   <input type="password" className="form-control3" placeholder='Enter Your Password'/>
   </div>
   <div className="mb-3">
   <input type="password" className="form-control3" placeholder='Confirm Password'/>
   </div>
  <button type="submit" className="btn-primary">Register</button>
  <p className='account-exist'>Already have an account? <Link to="/login" className="login">Login</Link></p>
  <p className='signup-with'>or signup with</p>
  <p className='footer'>This site is protected by reCAPTCHA and </p>
 <p className='footer'> privacy policy and terms of use apply.</p>
</form>
    </div>
  )
}

export default Signup