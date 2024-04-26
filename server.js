const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./Routes');
const db = require('./Models')
const cors = require('cors');
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })

const app = express();
const PORT = 5000;
const corsOptions = {
    origin: 'http://localhost:3000',
};
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// app.post('/car', (req, res)=>{
//     console.log(req.body);
//     res.send('Form data received');
// })
// app.post('/car1', upload.array('pictures', 12), function (req, res, next) {
//     console.log('body',req.body);
//     console.log('file===============',req.body);
//   })
app.use('/api/v1/', routes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
