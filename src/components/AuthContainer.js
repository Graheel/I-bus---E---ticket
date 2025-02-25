import React, { useState } from "react";
import AuthSwitch from "./AuthSwitch";

const AuthContainer = () => {
  const [authType, setAuthType] = useState("user"); // Correctly managing state

  return (
    <div>
      <AuthSwitch authType={authType} setAuthType={setAuthType} />
    </div>
  );
};

export default AuthContainer;
