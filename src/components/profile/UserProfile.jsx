import { useAuth } from "context";
import React from "react";
import { Link } from "react-router-dom";

function UserProfile() {
  const { logoutHandler, currentUser } = useAuth();
  return (
    <div className="flex-grow">
      <h1>Profile</h1>
      <h2>name</h2>

      {currentUser ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </div>
  );
}

export { UserProfile };
