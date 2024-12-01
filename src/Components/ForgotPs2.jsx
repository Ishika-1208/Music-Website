import React from 'react'
import './ForgotPs2.css'
import { Link } from "react-router-dom";

const ForgotPs2 = () => {
  return (
    <div className="container">
    <form>
    <h2>Forgot Password</h2>
    <p className='heading'>Please enter the  email address linked</p>
    <p className='heading2'>with your account</p>
  <div className="mb-3">
    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email  or username'/>
  </div>
  <button type='Submit' className="btn-primary">Send OTP</button>
  <p className='account-exist'>Remember password?<Link to="/login" className="login">Login </Link></p>
</form>
</div>
  )
}

export default ForgotPs2