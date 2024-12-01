import React from 'react'
import './NewPs.css'

const NewPs = () => {
  return (
    <div className="container">
    <form>
    <h2>Create new password</h2>
    <p className='heading'>Your new password must be unique</p>
    <p className='heading2'>from those previously used</p>
    <div className="mb-3">
   <input type="password" className="form-control" placeholder='Enter Your Password'/>
   </div>
   <div className="mb-3">
   <input type="password" className="form-control" placeholder='Confirm Password'/>
   </div>
  <button type='Submit' className="btn-primary">Reset password</button>
</form>
</div>
  )
}

export default NewPs