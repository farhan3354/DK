import React from 'react';
import './Login.css'; // Assuming you have some custom styles

const Login = () => {
  return (
    <div className="login-container">
      <form className="form">
        <div className="flex flex-col">
          <div className="login-title">Login</div>
          <label className="form-label">Username:</label>
          <input type="text" className="input" />
          <label className="form-label">Password:</label>
          <input type="password" className="input" />
          <button type="submit" className="login-button">Log In</button>
          <div className="signup-info">
            Don't have an account? <span className="signup-link">Sign Up</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
