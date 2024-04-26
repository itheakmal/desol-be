const router = require('express').Router();
const { registerUser, loginUser } = require('../Controllers/authController')
const {submitCar} = require("../Controllers/carController")
const authenticateToken = require("../Middlewares/authenticateToken")
const multer = require("multer")
  const upload = multer();

  router.post('/register', registerUser)
  router.post('/login', loginUser)
  router.post('/car', [authenticateToken, upload.none()], submitCar)

module.exports = router;