import React, { useState } from "react";
import axios from "axios";


const DriverRegisterForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("https://i-bus-e-ticket-1.onrender.com/api/auth/register", { username, email, password, role: "driver" });
            alert("Driver registered successfully!");
            

        } catch (error) {
            alert("Registration failed.");
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <input type="text" className="auth-input" placeholder="Driver Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" className="auth-input" placeholder="Driver Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" className="auth-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="auth-submit-btn">Register as Driver</button>
        </form>
    );
};

export default DriverRegisterForm;
