import React from "react";
import { Link } from "react-router-dom";
import "../auth.css";
function LoginForm() {
  return (
    <div className="flex-grow">
      <div>
        <div className="login-form">
          <h2 className="form-title">Login</h2>
          <form className="form-container">
            <div className="form-group">
              <label for="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group">
              <label for="password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-actions-login">
              <button type="submit" className="btn-login">
                Login
              </button>
              <button type="button" className="btn-guest-login">
                Login as Guest
              </button>
            </div>
            <div className="form-switch">
              <p>Don't have an account? </p>
              <Link to="/signup">Create One</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { LoginForm };
