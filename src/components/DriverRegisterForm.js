import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DriverRegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // You can add registration logic here
    // For now, let's assume the registration is successful
    if (username && email && password) {
      navigate('/driver-dashboard');  // Redirect to Driver Dashboard after registration
    }
  };

  return (
    <form className="auth-form" onSubmit={handleRegister}>
      <input
        type="text"
        placeholder="Driver Username"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register as Driver</button>
    </form>
  );
};

export default DriverRegisterForm;
