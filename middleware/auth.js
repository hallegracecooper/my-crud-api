const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Check for token in the Authorization header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // expecting "Bearer <token>"

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'yoursecretkey');
    req.user = decoded; // Attach user payload to request
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid token.' });
  }
};