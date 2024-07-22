import React from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useDataUser from "../hooks/user/use-data-user.hook";

const AuthValidate: React.FC = () => {
  const location = useLocation();
  const { userData } = useDataUser();
  const isInLoginPage = location.pathname === "/";
  const isRegisterPage = location.pathname === "/register";

  // Validate if user is not logged, redirect to login

  if (!isInLoginPage && !isRegisterPage && !userData) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // Validate if user is logged, redirect to home
  if ((isInLoginPage || isRegisterPage) && userData) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default AuthValidate;
