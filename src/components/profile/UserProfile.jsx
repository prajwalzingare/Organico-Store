import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "context";
import "./userprofile.css";

function UserProfile() {
  const { logoutHandler, currentUser } = useAuth();

  return (
    <div className="profile-page flex-grow">
      <div className="profile-container">
        <h2 className="profile-heading">User Profile</h2>
        <div className="avatar-container">
          <img
            className="avatar-image"
            src="https://res.cloudinary.com/dspqnsoy1/image/upload/v1685857534/6141d9c91c378763a53f663c2562ec79dc7e8902_tim7go.webp"
            alt="Avatar"
          />
          {currentUser && <div className="status-dot" />}
        </div>

        <div className="profile-details">
          <h3>
            Full Name: {currentUser?.firstName} {""}
            {currentUser?.lastName}
          </h3>
          <h3>Email: {currentUser?.email}</h3>
        </div>

        <div className="profile-actions">
          {currentUser ? (
            <button className="logout-btn" onClick={logoutHandler}>
              Logout
            </button>
          ) : (
            <Link className="login-link" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export { UserProfile };
