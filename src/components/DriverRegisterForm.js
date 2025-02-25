import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DriverRegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && email && password) {
      navigate("/driver-dashboard");
    }
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <input
        type="text"
        className="auth-input"
        placeholder="Driver Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        className="auth-input"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="auth-input"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="auth-submit-btn">Register as Driver</button>
    </form>
  );
};

export default DriverRegisterForm;
