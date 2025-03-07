import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserRegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://i-bus-e-ticket-2.onrender.com/api/auth/register", { username, email, password, role: "user" });
            alert("User registered successfully!");
            navigate("/home");
        } catch (error) {
            alert("Registration failed.");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" className="auth-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" className="auth-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-submit-btn">User Register</button>
        </form>
    );
};

export default UserRegisterForm;
