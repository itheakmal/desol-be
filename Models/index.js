const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:UGUdMrsIivBiubf5@cluster0.0ycjwey.mongodb.net/desol?retryWrites=true&w=majority&appName=Cluster0');
const db = mongoose.connection;
module.exports = db;
