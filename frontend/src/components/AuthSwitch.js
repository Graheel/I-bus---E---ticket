import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserLoginForm from "./UserLoginForm";
import AdminLoginForm from "./AdminLoginForm";
import UserRegisterForm from "./UserRegisterForm";
import AdminRegisterForm from "./AdminRegisterForm";
import DriverLoginForm from "./DriverLoginForm";
import DriverRegisterForm from "./DriverRegisterForm";
import "./AuthSwitch.css";

const AuthSwitch = ({ authType, setAuthType }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // Callback function for successful login/register
  const handleSuccess = () => {
    navigate("/"); 
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <h2>
          {authType === "user"
            ? isLogin
              ? "User Login"
              : "User Register"
            : authType === "admin"
            ? isLogin
              ? "Admin Login"
              : "Admin Register"
            : isLogin
            ? "Driver Login"
            : "Driver Register"}
        </h2>
        <button className="switch-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Switch to Register" : "Switch to Login"}
        </button>
      </div>

      {/* Show the correct form and pass handleSuccess for redirection */}
      <div className="auth-form-container">
        {authType === "user" &&
          (isLogin ? <UserLoginForm onSuccess={handleSuccess} /> : <UserRegisterForm onSuccess={handleSuccess} />)}
        {authType === "admin" &&
          (isLogin ? <AdminLoginForm onSuccess={handleSuccess} /> : <AdminRegisterForm onSuccess={handleSuccess} />)}
        {authType === "driver" &&
          (isLogin ? <DriverLoginForm onSuccess={handleSuccess} /> : <DriverRegisterForm onSuccess={handleSuccess} />)}
      </div>

      {/* Toggle between User, Admin, and Driver */}
      <div className="auth-toggle">
        <button
          onClick={() => setAuthType("user")}
          className={authType === "user" ? "switch-user active" : "switch-user"}
        >
          User
        </button>
        <button
          onClick={() => setAuthType("admin")}
          className={authType === "admin" ? "switch-user active" : "switch-user"}
        >
          Admin
        </button>
        <button
          onClick={() => setAuthType("driver")}
          className={authType === "driver" ? "switch-user active" : "switch-user"}
        >
          Driver
        </button>
      </div>
    </div>
  );
};

export default AuthSwitch;
