import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  return (
    <div className="flex-grow">
      <div>
        <div className="login-form">
          <h2 className="form-title">Sign up</h2>
          <form className="form-container">
            <div className="form-group">
              <label for="firstname" className="form-label">
                First Name*
              </label>
              <input
                type="text"
                id="firstname"
                className="form-input"
                placeholder="Enter First Name"
              />
            </div>
            <div className="form-group">
              <label for="lastname" className="form-label">
                Last Name*
              </label>
              <input
                type="text"
                id="lastname"
                className="form-input"
                placeholder="Enter Last Name"
              />
            </div>
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
            <div className="form-group">
              <label for="password" className="form-label">
                Confirm Password*
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-actions-sighnup">
              <button type="submit" className="btn-sighnup">
                Signup
              </button>
            </div>
            <div className="form-switch">
              <p>Already have an account? </p>
              <Link to="/login">Login here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export { SignupForm };
