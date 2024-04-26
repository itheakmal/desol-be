const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Un-Authorized' });
  }

  jwt.verify(token, "JlbWFpbCI6Iml0aGVha21hbEBnbWFpbC5jb20", (err, user) => {
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
