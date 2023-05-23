import { useAuth } from "context";
import React from "react";
import { Link } from "react-router-dom";
import "./userprofile.css";
function UserProfile() {
  const { logoutHandler, currentUser } = useAuth();
  return (
    <div className="flex-grow">
      <div className="profile-container">
        <h3>Full name:{currentUser?.firstName}</h3>
        <h3>Email:{currentUser?.email}</h3>

        {currentUser ? (
          <button onClick={logoutHandler}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
}

export { UserProfile };
