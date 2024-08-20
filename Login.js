import React, { useState } from 'react';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <button type="submit" className="btn-primary">Login</button>
        </form>
        <div className="auth-options">
          <p>Or login with:</p>
          <button className="btn-secondary">Login with Facebook</button>
          <button className="btn-secondary">Login with Google</button>
        </div>
        <p className="switch-auth">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
