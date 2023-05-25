import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();

function AuthProvider({ children }) {
  //getting the data from local storage that we set in login handler
  const localStorageToken = JSON.parse(localStorage.getItem("loginDetails"));
  //for settting token and current user
  const [token, setToken] = useState(localStorageToken?.token);
  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);

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
          token,
          currentUser,
          setToken,
          setCurrentUser,
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
