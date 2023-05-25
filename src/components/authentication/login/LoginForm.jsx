import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../auth.css";
import { useLoginHandler } from "hooks";
function LoginForm() {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const { loginHandler } = useLoginHandler();

  return (
    <div className="flex-grow">
      <div>
        <div className="login-form">
          <h2 className="form-title">Login</h2>
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                value={loginFormData.email}
                onChange={(e) =>
                  setLoginFormData({
                    ...loginFormData,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Password*
              </label>
              <input
                type="password"
                id="password"
                className="form-input"
                placeholder="Enter your password"
                value={loginFormData.password}
                onChange={(e) =>
                  setLoginFormData({
                    ...loginFormData,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-actions-login">
              <button
                type="submit"
                className="btn-login"
                onClick={(e) =>
                  loginHandler(e, setLoginFormData, loginFormData)
                }
              >
                Login
              </button>
              <button
                type="button"
                className="btn-guest-login"
                onClick={(e) => loginHandler(e, setLoginFormData)}
              >
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
