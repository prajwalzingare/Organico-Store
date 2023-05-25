import { useAuth } from "context";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

function PrivateRoute() {
  const { token } = useAuth();
  const location = useLocation();
  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export { PrivateRoute };
