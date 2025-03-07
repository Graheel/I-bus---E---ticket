import React, { useState } from "react";
import AuthSwitch from "../components/AuthSwitch"; 

const LoginRegisterPage = () => {
  const [isUser, setIsUser] = useState(true); 

  return (
    <div className="login-register-page">
      <h1>Welcome to the Login/Register Page</h1>
      <AuthSwitch isUser={isUser} setIsUser={setIsUser} />
    </div>
  );
};

export default LoginRegisterPage;
