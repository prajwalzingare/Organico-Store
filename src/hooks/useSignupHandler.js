import axios from "axios";
import { useAuth } from "context";
import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function useSignupHandler() {
  const { setToken, setCurrentUser } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  //initial state for form
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  //intial state for Errors
  const errorInitialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  //reducer function for form
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
  // reducer function for handling error state
  const errorReducer = (state, { type, payload }) => {
    switch (type) {
      case "SET_FIRSTNAME_ERROR":
        return { ...state, firstName: payload };
      case "SET_LASTNAME_ERROR":
        return { ...state, lastName: payload };
      case "SET_EMAIL_ERROR":
        return { ...state, email: payload };
      case "SET_PASSWORD_ERROR":
        return { ...state, password: payload };
      case "SET_CONFIRM_PASSWORD_ERROR":
        return { ...state, confirmPassword: payload };
      default:
        return state;
    }
  };

  //reducer function for form state
  const [formState, formDispatch] = useReducer(formReducer, initialFormData);
  //reducer function for error state
  const [errorState, errorDispatch] = useReducer(
    errorReducer,
    errorInitialState
  );

  //function for checking form validity
  const checkFormValidity = () => {
    let isFormReady = true;

    //for firstName
    if (formState.firstName === "" || !/[A-Za-z]+/.test(formState.firstName)) {
      errorDispatch({
        type: "SET_FIRSTNAME_ERROR",
        payload: "First Name should have only letters",
      });
      isFormReady = false;
    }
    //for last name
    if (formState.lastName === "" || !/[A-Za-z]+/.test(formState.lastName)) {
      errorDispatch({
        type: "SET_LASTNAME_ERROR",
        payload: "Last Name should have only letters",
      });
      isFormReady = false;
    }

    //for Email
    if (
      formState.email === "" ||
      !/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(formState.email)
    ) {
      errorDispatch({
        type: "SET_EMAIL_ERROR",
        payload: "Please enter valid email",
      });
      isFormReady = false;
    }

    //for password

    if (
      formState.password === "" ||
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/g.test(
        formState.password
      )
    ) {
      errorDispatch({
        type: "SET_PASSWORD_ERROR",
        payload:
          "Password length should contain minimum 8 characters (at least one capital, small letter and number)",
      });

      isFormReady = false;
    }

    //for confirm password
    if (
      formState.confirmPassword === "" ||
      formState.password !== formState.confirmPassword
    ) {
      errorDispatch({
        type: "SET_CONFIRM_PASSWORD_ERROR",
        payload: "Please ensure that both passwords match",
      });
      isFormReady = false;
    }
    //will return true or false according to condition
    return isFormReady;
  };

  //post Request for creating user
  const createUser = async () =>
    await axios.post("/api/auth/signup", formState);

  const signupHandler = async (e) => {
    //for preventing the reload
    e.preventDefault();
    if (checkFormValidity()) {
      try {
        const {
          status,
          data: { createdUser, encodedToken },
        } = await createUser();

        //seting the new user in local storage
        if (status === 200 || status === 201) {
          localStorage.setItem(
            "loginDetails",
            JSON.stringify({ user: createdUser, token: encodedToken })
          );
        }
        //seting the token and user after signup handle function
        setCurrentUser(createdUser);
        setToken(encodedToken);
        navigate(location?.state?.from?.pathname || "/");
        toast.success("Congratulations! Signup completed successfully!");
      } catch (error) {
        console.log(error);
        toast.error("Oops! Signup failed. Please try again.");
      }
    }
  };
  return { signupHandler, formDispatch, formState, errorDispatch, errorState };
}

export { useSignupHandler };
