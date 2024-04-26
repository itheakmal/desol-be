const router = require('express').Router();
const { registerUser, loginUser } = require('../Controllers/authController')
const {submitCar, run} = require("../Controllers/carController")
const authenticateToken = require("../Middlewares/authenticateToken")
const multer = require("multer")
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "_" + file.originalname);
    },
  });
  const upload = multer({ storage });

  router.get('/', run)
  router.post('/register', registerUser)
  router.post('/login', loginUser)
  router.post('/car', [authenticateToken, upload.array("pictures", 10)], submitCar)

module.exports = router;