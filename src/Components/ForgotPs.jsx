import React from 'react'
import './ForgotPs.css'

const ForgotPs = () => {
  return (
    <div className="container">
    <form>
    <h2>Forgot Password</h2>
    <p className='heading'>Please enter the  email address linked</p>
    <p className='heading2'>with your account</p>
  <div className="mb-3">
    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email  or username'/>
  </div>
  <button type='Submit' className="btn-primary">Send email</button>
  <p className='account-exist'>Remember password?<a href="Signup.jsx" className="login">Login </a></p>
</form>
</div>
  )
}

export default ForgotPs