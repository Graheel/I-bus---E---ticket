import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://i-bus-e-ticket-1.onrender.com/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            alert("User logged in successfully!");
            navigate("/home");

        } catch (error) {
            alert("Login failed. Check credentials.");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="email" className="auth-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-submit-btn">User Login</button>
        </form>
    );
};

export default UserLoginForm;
