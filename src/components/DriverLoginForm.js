import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverLoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // You can add authentication logic here
    // For now, let's assume the login is successful
    if (username && password) {
      navigate('/driver-dashboard');  // Redirect to Driver Dashboard after login
    }
  };

  return (
    <form className="auth-form" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Driver Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Driver Login</button>
    </form>
  );
};

export default DriverLoginForm;
