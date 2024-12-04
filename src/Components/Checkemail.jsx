import React from "react";
import '../Styles/Checkemail.css'
import { Link } from "react-router-dom";

const Checkemail = () => {
  return (
    <div className="container">
        <h1>Check your email</h1>
        <h5>We have sent you an email with password</h5>
        <h5>reset information to ak*****@gmail.com</h5>
        <button  type="submit" className="btn-primary" >Resend Email</button>
        <p className='remember-ps'>Remember password?<Link to="/login" className="login">Login</Link></p>
        <p className="footer2">Don’t receive the email? Check your </p>
        <p className="footer2">spam folder</p>
    </div>
  )
}

export default Checkemail