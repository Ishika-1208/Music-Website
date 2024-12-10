import React, { useState } from 'react';
import '../Styles/ForgotPs2.css'
import { Link } from "react-router-dom";

const ForgotPs2 = () => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      const response = await fetch('https://task-4-0pfy.onrender.com/user/requestPasswordReset', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message); // Success message
      } else {
        setError(data.error); // Error message
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="container">
    <form  onSubmit={handleSubmit}>
    <h1>Forgot Password</h1>
    <p className='heading'>Please enter the  email address linked</p>
    <p className='heading2'>with your account</p>
  <div className="mb-3">
    <input type="email" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email  or username' value={email}
            onChange={(e) => setEmail(e.target.value)}
            required/>
  </div>
  <button type='Submit' className="btn-primary"  disabled={loading}> {loading ? 'Submitting...' : 'Send Reset Link'}</button>

 {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}

  <p className='account-exist'>Remember password?<Link to="/login" className="login">Login </Link></p>
</form>
</div>
</>
  )
}

export default ForgotPs2