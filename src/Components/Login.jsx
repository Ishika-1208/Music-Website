import React from 'react'
import './Login.css'
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
    <form>
    <h2>Log in to Echo!</h2>
  <div className="mb-3">
    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email  or username'/>
  </div>
  <div className="mb-3">
    <input type="password" className="form-control" placeholder='Enter your password'/>
  </div>
  <Link to='/ForgotPs2' className='forgotps'>Forgot Password?</Link>
  <br/>
  <button type="submit" className="btn-primary">Submit</button>
  <p className='account-exist'>Don't have any account?  <Link to="/signup" className="signup">Sign Up </Link></p>
  <p className="continue-with">or continue with</p>
</form>
</div>
  )
}

export default Login