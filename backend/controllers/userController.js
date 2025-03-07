const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// User, Admin, Driver Registration
exports.register = async (req, res) => {
    const { username, email, password, role } = req.body;

    try {
        // Validate role
        if (!["user", "admin", "driver"].includes(role)) {
            return res.status(400).json({ message: "Invalid role" });
        }

        // Check if email already exists
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "User already exists" });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        user = new User({ username, email, password: hashedPassword, role });
        await user.save();

        res.status(201).json({ message: `${role.charAt(0).toUpperCase() + role.slice(1)} registered successfully` });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};

// User, Admin, Driver Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, role: user.role }, 
            process.env.JWT_SECRET, 
            { expiresIn: "1d" }
        );

        res.json({ 
            message: `${user.role.charAt(0).toUpperCase() + user.role.slice(1)} logged in successfully`,
            token, 
            user: { id: user._id, username: user.username, email: user.email, role: user.role } 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
};
