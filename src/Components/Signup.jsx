
import React, { useState } from "react";
import '../Styles/Signup.css';
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    fetch("https://task-4-0pfy.onrender.com/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
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
        console.log(data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="Signup-Page">
    <div className="container">
      <form onSubmit={fetchData}>
        <h1>Sign Up</h1>
        <h5>Echo the Beat, Feel the Vibe!</h5>

        <div className="mb-2">
          <input
            type="text"
            className="form-control3"
            placeholder="First Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            className="form-control3"
            placeholder="Enter Your Email Address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control3"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
         
        {data && <p className="success-message">Register successful! Login, {data.name}.</p>}

        {error && <p className="error">{error}</p>}

        <p className="account-exist">
          Already have an account? <Link to="/login" className="login">Login</Link>
        </p>

        <p className="footer">
          This site is protected by reCAPTCHA and
        </p>
        <p className="footer">
          privacy policy and terms of use apply.
        </p>
      </form>
    </div>
    </div>
  );
};

export default Signup;
