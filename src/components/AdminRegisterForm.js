import React from "react";
import "./AuthSwitch.css"; // Ensure styles are applied

const AdminRegisterForm = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    alert("Admin registered successfully (dummy functionality for now).");
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleRegister}>
        <input type="text" placeholder="Admin Username" className="auth-input" required />
        <input type="email" placeholder="Admin Email" className="auth-input" required />
        <input type="password" placeholder="Admin Password" className="auth-input" required />
        <button type="submit" className="auth-submit-btn">Register Admin</button>
      </form>
    </div>
  );
};

export default AdminRegisterForm;
