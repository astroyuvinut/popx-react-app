import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div style={{ marginTop: 'auto', paddingBottom: '20px' }}>
        <h1>Welcome to PopX</h1>
        <p className="subtitle">
          Lorem ipsum dolor sit amet,<br/>
          consectetur adipiscing elit,
        </p>
        <div className="button-group">
          <button className="btn-primary" onClick={() => navigate('/register')}>
            Create Account
          </button>
          <button className="btn-secondary" onClick={() => navigate('/login')}>
            Already Registered? Login
          </button>
        </div>
      </div>
    </div>
  );
}
