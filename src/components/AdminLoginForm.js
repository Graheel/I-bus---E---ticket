import React from "react";
import { useNavigate } from "react-router-dom";
import "./AuthSwitch.css"; 

const AdminLoginForm = () => {
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Admin logged in successfully!");
    
    // Redirect to Admin Dashboard
    navigate("/admin-dashboard", { replace: true });
  };

  return (
    <div className="auth-form">
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Admin Username" className="auth-input" required />
        <input type="password" placeholder="Admin Password" className="auth-input" required />
        <button type="submit" className="auth-submit-btn">Login Admin</button>
      </form>
    </div>
  );
};

export default AdminLoginForm;
