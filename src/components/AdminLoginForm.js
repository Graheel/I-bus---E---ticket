import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            if (res.data.user.role !== "admin") {
                alert("Not an admin account!");
                return;
            }
            localStorage.setItem("token", res.data.token);
            navigate("/admin-dashboard");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="email" className="auth-input" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-submit-btn">Admin Login</button>
        </form>
    );
};

export default AdminLoginForm;
