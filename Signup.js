import React, { useState } from 'react';
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Signup:', { email, password, confirmPassword });
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Signup</h2>
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit" className="btn-primary">Signup</button>
        </form>
        <div className="auth-options">
          <p>Or signup with:</p>
          <button className="btn-secondary">Signup with Facebook</button>
          <button className="btn-secondary">Signup with Google</button>
        </div>
        <p className="switch-auth">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
