import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform validation or authentication logic here
    if (email.trim() === '' || password.trim() === '') {
      setErrorMessage('Please enter your email and password.');
    } else {
      // Clear error message if valid
      setErrorMessage('');
      // Simulate login logic (replace with actual authentication)
      console.log('Logging in with:', { email, password });
      // Clear form fields after submission
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-3 mb-5 bg-white rounded" style={{ maxWidth: '400px' }}>
        <h2 className="card-title text-center mb-4">Login</h2>
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-outline-dark w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
