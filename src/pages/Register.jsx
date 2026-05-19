import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <h1>Create your<br/>PopX account</h1>

      <form onSubmit={(e) => { e.preventDefault(); navigate('/profile'); }}>
        <div className="form-group">
          <label>Full Name<span>*</span></label>
          <input type="text" placeholder="Marry Doe" required />
        </div>
        <div className="form-group">
          <label>Phone number<span>*</span></label>
          <input type="tel" placeholder="Marry Doe" required />
        </div>
        <div className="form-group">
          <label>Email address<span>*</span></label>
          <input type="email" placeholder="Marry Doe" required />
        </div>
        <div className="form-group">
          <label>Password<span>*</span></label>
          <input type="password" placeholder="Marry Doe" required />
        </div>
        <div className="form-group">
          <label>Company name</label>
          <input type="text" placeholder="Marry Doe" />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?<span>*</span></p>
          <div className="radio-options">
            <label className="radio-label">
              <input type="radio" name="agency" value="yes" required />
              Yes
            </label>
            <label className="radio-label">
              <input type="radio" name="agency" value="no" required />
              No
            </label>
          </div>
        </div>

        <div className="button-group" style={{ paddingBottom: '24px' }}>
          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}
