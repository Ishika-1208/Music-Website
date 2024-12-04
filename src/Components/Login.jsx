import React, { useState } from "react";
import '../Styles/Login.css'
import { Link } from "react-router-dom";

const Login = () => {

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    fetch("https://task-4-0pfy.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="container">
    <form onSubmit={fetchData}>
    <h2>Log in to Echo!</h2>
  <div className="mb-3">
    <input 
    type="email" 
    className="form-control" 
    placeholder='Enter your email or username' 
    value={userEmail}
    onChange={(e) => setUserEmail(e.target.value)}
    />
  </div>
  <div className="mb-3">
    <input 
    type="password" 
    className="form-control" 
    placeholder='Enter your password' 
    value={userPassword}
    onChange={(e) => setUserPassword(e.target.value)}
    />
  </div>

  <Link to='/ForgotPs2' className='forgotps'>Forgot Password?</Link>
  <br/>
  <button 
  type="submit" className="btn-primary" disabled={loading}> {loading ? "Submiting..." : "Submit"}</button>
  
  {data && <p className="success-message">Login successful! Welcome, {data.user.name}.</p>}

  {error && <p className="error">{error}</p>}

  <p className='account-exist'>Don't have any account?  <Link to="/signup" className="signup">Sign Up </Link></p>
  <p className="continue-with">or continue with</p>
</form>
</div>
  )
}

export default Login