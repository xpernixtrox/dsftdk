import React from "react";
import { Link, useNavigate } from "react-router-dom";
import slide4 from "./assets/b2.jpg"; // Import the image

import "./styles/LoginSignup.css";

const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate("/home"); // Navigate to the Home page
  };

  return (
    <div className="auth-container" style={{ backgroundImage: `url(${slide4})` }}>
      <div className="auth-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="auth-button">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
