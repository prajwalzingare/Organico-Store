import { useSignupHandler } from "hooks/useSignupHandler";
import React, { useReducer } from "react";
import { Link } from "react-router-dom";

function SignupForm() {
  const { signupHandler } = useSignupHandler();

  //initial state for form
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //formReducer
  const formReducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_FIRST_NAME":
        return { ...state, firstName: payload };
      case "SET_LAST_NAME":
        return { ...state, lastName: payload };
      case "SET_EMAIL":
        return { ...state, email: payload };
      case "SET_PASSWORD":
        return { ...state, password: payload };
      case "SET_CONFIRM_PASSWORD":
        return { ...state, confirmPassword: payload };

      default:
        return state;
    }
  };

  //REDUCER FUNCTION
  const [formState, formDispatch] = useReducer(formReducer, initialFormData);

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
                onChange={(e) =>
                  formDispatch({
                    type: "SET_FIRST_NAME",
                    payload: e.target.value,
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
                  formDispatch({
                    type: "SET_LAST_NAME",
                    payload: e.target.value,
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
                  formDispatch({
                    type: "SET_EMAIL",
                    payload: e.target.value,
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
                  formDispatch({
                    type: "SET_PASSWORD",
                    payload: e.target.value,
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
                  formDispatch({
                    type: "SET_CONFIRM_PASSWORD",
                    payload: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-actions-sighnup">
              <button
                type="submit"
                className="btn-sighnup"
                onClick={(e) => signupHandler(e, formState)}
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
