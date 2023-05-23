import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  //getting the data from local storage that we set in login handler
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  //for settting token and current user
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

  //post request for login info
  const getLoginInformation = async (email, password) =>
    await axios.post("/api/auth/login", {
      email,
      password,
    });
  //post Request for creating user
  const createUser = async (firstName, lastName, email, password) =>
    await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      email,
      password,
    });

  const loginHandler = async (email, password) => {
    try {
      // we get response from getloginInformation
      const {
        status,
        data: { foundUser, encodedToken },
      } = await getLoginInformation(email, password);

      //we are seting the user in local storage
      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
      }

      //seting the token and user after login handle function
      setToken(encodedToken);
      setCurrentUser(foundUser);

      toast.success("Logged in succesfully");
    } catch (error) {
      console.log(error);
      toast.error("error in login");
    }
  };

  const signupHandler = async (firstName, lastName, email, password) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await createUser(firstName, lastName, email, password);

      if (status === 200 || status === 201) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: createdUser, token: encodedToken })
        );
      }
      console.log(createdUser);
      setCurrentUser(createdUser);
      setToken(encodedToken);
      toast.success("signup  succesfully");
    } catch (error) {
      console.log(error);
      toast.error("error in signup");
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("loginDetails");
    setToken(null);
    setCurrentUser(null);
    toast.success("Logout  succesfully");
  };

  return (
    <div>
      <AuthContext.Provider
        value={{
          loginHandler,
          token,
          currentUser,
          signupHandler,
          logoutHandler,
        }}
      >
        {children}
      </AuthContext.Provider>
    </div>
  );
}

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
