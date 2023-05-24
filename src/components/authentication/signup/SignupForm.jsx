import { ErrorRoundedIcon } from "assets";
import { useSignupHandler } from "hooks/useSignupHandler";
import React from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const { signupHandler, formDispatch, formState, errorDispatch, errorState } =
    useSignupHandler();

  return (
    <div className="flex-grow">
      <div>
        <div className="login-form">
          <h2 className="form-title">Sign up</h2>
          <form className="form-container">
            <div className="form-group">
              <label htmlFor="firstname" className="form-label">
                First Name*
              </label>
              <input
                type="text"
                id="firstname"
                className="form-input"
                placeholder="Enter First Name"
                value={formState.firstName}
                onChange={(e) =>
                  formDispatch({
                    type: "SET_FIRST_NAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() => {
                  errorDispatch({
                    type: "SET_FIRSTNAME_ERROR",
                    payload: "",
                  });
                }}
              />
              {errorState.firstName.length > 0 && (
                <div className="form-field-error">
                  <ErrorRoundedIcon />
                  <p>{errorState.firstName}</p>
                </div>
              )}
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
                value={formState.lastName}
                onChange={(e) =>
                  formDispatch({
                    type: "SET_LAST_NAME",
                    payload: e.target.value,
                  })
                }
                onFocus={() => {
                  errorDispatch({
                    type: "SET_LASTNAME_ERROR",
                    payload: "",
                  });
                }}
              />
              {errorState.lastName.length > 0 && (
                <div className="form-field-error">
                  <ErrorRoundedIcon />
                  <p>{errorState.lastName}</p>
                </div>
              )}
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
                value={formState.email}
                onChange={(e) =>
                  formDispatch({
                    type: "SET_EMAIL",
                    payload: e.target.value,
                  })
                }
                onFocus={() => {
                  errorDispatch({
                    type: "SET_EMAIL_ERROR",
                    payload: "",
                  });
                }}
              />
              {errorState.email.length > 0 && (
                <div className="form-field-error">
                  <ErrorRoundedIcon />
                  <p>{errorState.email}</p>
                </div>
              )}
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
                value={formState.password}
                onChange={(e) =>
                  formDispatch({
                    type: "SET_PASSWORD",
                    payload: e.target.value,
                  })
                }
                onFocus={() => {
                  errorDispatch({
                    type: "SET_PASSWORD_ERROR",
                    payload: "",
                  });
                }}
              />
              {errorState.password.length > 0 && (
                <div className="form-field-error">
                  <ErrorRoundedIcon />
                  <p>{errorState.password}</p>
                </div>
              )}
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
                value={formState.confirmPassword}
                onChange={(e) =>
                  formDispatch({
                    type: "SET_CONFIRM_PASSWORD",
                    payload: e.target.value,
                  })
                }
                onFocus={() => {
                  errorDispatch({
                    type: "SET_CONFIRM_PASSWORD_ERROR",
                    payload: "",
                  });
                }}
              />
              {errorState.confirmPassword.length > 0 && (
                <div className="form-field-error">
                  <ErrorRoundedIcon />
                  <p>{errorState.confirmPassword}</p>
                </div>
              )}
            </div>
            <div className="form-actions-sighnup">
              <button
                type="submit"
                className="btn-sighnup"
                onClick={(e) => signupHandler(e)}
              >
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
