import React, { useState } from "react";
import AuthSwitch from "./AuthSwitch";
import "./AuthContainer.css"; 

const AuthContainer = () => {
  const [authType, setAuthType] = useState("user");

  return (
    <div className="auth-container">
      {/* Welcome Banner */}
      <div className="welcome-banner">
        <h1>WELCOME TO IBUS - E TICKET</h1>
      </div>

      {/* Auth Forms */}
      <div className="auth-content">
        <AuthSwitch authType={authType} setAuthType={setAuthType} />
      </div>
    </div>
  );
};

export default AuthContainer;
