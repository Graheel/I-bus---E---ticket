import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverLoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate("/driver-dashboard");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <input
        type="text"
        className="auth-input"
        placeholder="Driver Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="auth-input"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="auth-submit-btn">Driver Login</button>
    </form>
  );
};

export default DriverLoginForm;