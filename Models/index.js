const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.DB_STRING);
const db = mongoose.connection;
module.exports = db;
