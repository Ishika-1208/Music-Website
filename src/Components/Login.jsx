

// import React, { useState } from "react";
// import '../Styles/Login.css';
// import { Link, useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const navigate = useNavigate(); // For redirecting after successful login

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("https://task-4-0pfy.onrender.com/user/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       if (!response.ok) {
//         throw new Error("Invalid email or password.");
//       }

//       const data = await response.json();

//       // Save the token or user data to localStorage or context
//       localStorage.setItem("token", data.token);

//       // Redirect user to the dashboard or homepage
//       navigate("/Homepage");

//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container">
//       <form onSubmit={handleLogin}>
//         <h1>Log in to Echo!</h1>
//         <div className="mb-3">
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter your email or username"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </div>
//         <div className="mb-3">
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </div>

//         <Link to="/ForgotPs2" className="forgotps">
//           Forgot Password?
//         </Link>
//         <br />
//         <button
//           type="submit"
//           className="btn-primary"
//           disabled={loading}
//         >
//           {loading ? "Submitting..." : "Login"}
//         </button>

//         {error && <p className="error">{error}</p>}

//         <p className="account-exist">
//           Don't have an account? <Link to="/signup" className="signup">Sign Up</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import "../Styles/Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("https://task-4-0pfy.onrender.com/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid email or password.");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token);
      navigate("/Homepage");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login-Page">
    <div className="container">
      <form onSubmit={handleLogin}>
        <h1>Log in to Echo!</h1>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link to="/ForgotPs2" className="forgotps">
          Forgot Password?
        </Link>
        <button type="submit" className="btn-primary" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="error">{error}</p>}
        <p className="account-exist">
          Don't have an account?{" "}
          <Link to="/signup" className="signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Login;

