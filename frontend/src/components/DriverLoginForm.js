import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DriverLoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("https://i-bus-e-ticket-2.onrender.com/api/auth/login", { email, password });

            if (res.data.user.role !== "driver") {
                alert("Not a driver account!");
                return;
            }

            // ✅ Store driver email for fetching details later
            localStorage.setItem("driverEmail", res.data.user.email);
            sessionStorage.setItem("driverEmail", res.data.user.email);  
            localStorage.setItem("token", res.data.token);

            navigate("/driver-dashboard");
        } catch (error) {
            alert("Invalid credentials");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="email" className="auth-input" placeholder="Driver Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-submit-btn">Driver Login</button>
        </form>
    );
};

export default DriverLoginForm;
