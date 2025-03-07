import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AdminRegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/register", { username, email, password, role: "admin" });
            alert("Admin registered successfully!");
            navigate("/admin-dashboard");
        } catch (error) {
            alert("Registration failed.");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" className="auth-input" placeholder="Admin Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" className="auth-input" placeholder="Admin Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-submit-btn">Register Admin</button>
        </form>
    );
};

export default AdminRegisterForm;
