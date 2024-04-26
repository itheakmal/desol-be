const jwt = require('jsonwebtoken');
require('dotenv').config()
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Un-Authorized' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log('er', err)
    console.log('user', user)
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
