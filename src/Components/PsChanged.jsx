import React from 'react'
import Successmark from '../Images/Successmark.png'
import '../Styles/PsChanged.css';
import { Link } from "react-router-dom";

const PsChanged = () => {
  return (
    <div className="PsChanged-Page">
    <div className="container">
      <img className='Successmarklogo'src={Successmark} alt="Successmark" />
      <p className='ps-changed'>Password Changed!</p>
      <p className='heading1'>Your password has been</p>
      <p className='heading1'>changed successfully.</p>
      <button type="submit" className="btn-primary"><Link to="/login" className='login-button'>Back to login</Link></button>
    </div>
    </div>
  )
}

export default PsChanged