const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).json({ message: "Access Denied" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};
exports.protect = (req, res, next) => {
    let token = req.headers.authorization;
  
    if (token && token.startsWith('Bearer')) {
      token = token.split(' ')[1];
      try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded;
        next();
      } catch (error) {
        return res.status(401).json({ message: 'Not authorized, token failed' });
      }
    } else {
      return res.status(401).json({ message: 'Not authorized, no token' });
    }
  };