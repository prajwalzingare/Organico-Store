import { useSignupHandler } from "hooks/useSignupHandler";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const [signupFormData, setSignupFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    cPassword: "",
  });
  const { signupHandler } = useSignupHandler();
  const sighnupformHandler = (e) => {
    e.preventDefault();
    signupHandler(
      signupFormData.firstName,
      signupFormData.lastName,
      signupFormData.email,
      signupFormData.password
    );
  };
  return (
    <div className="flex-grow">
      <div>
        <div className="login-form">
          <h2 className="form-title">Sign up</h2>
          <form className="form-container" onSubmit={sighnupformHandler}>
            <div className="form-group">
              <label htmlFor="firstname" className="form-label">
                First Name*
              </label>
              <input
                type="text"
                id="firstname"
                className="form-input"
                placeholder="Enter First Name"
                onChange={(e) =>
                  setSignupFormData({
                    ...signupFormData,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname" className="form-label">
                Last Name*
              </label>
              <input
                type="text"
                id="lastname"
                className="form-input"
                placeholder="Enter Last Name"
                onChange={(e) =>
                  setSignupFormData({
                    ...signupFormData,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email*
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Enter your email"
                onChange={(e) =>
                  setSignupFormData({
                    ...signupFormData,
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
                onChange={(e) =>
                  setSignupFormData({
                    ...signupFormData,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Confirm Password*
              </label>
              <input
                type="cpassword"
                id="cpassword"
                className="form-input"
                placeholder="Enter your password"
                onChange={(e) =>
                  setSignupFormData({
                    ...signupFormData,
                    cPassword: e.target.value,
                  })
                }
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
