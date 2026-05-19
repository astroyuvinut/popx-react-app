import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/profile');
    }
  };

  return (
    <div className="page-container">
      <h1>Signin to your<br/>PopX account</h1>
      <p className="subtitle">
        Lorem ipsum dolor sit amet,<br/>
        consectetur adipiscing elit,
      </p>

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email Address</label>
          <input 
            type="email" 
            placeholder="Enter email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            placeholder="Enter password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="button-group">
          <button 
            type="submit" 
            className={email && password ? "btn-primary" : "btn-disabled"}
            disabled={!email || !password}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
