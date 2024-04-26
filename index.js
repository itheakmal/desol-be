const express = require('express');
const routes = require('./Routes');
const db = require('./Models')
const cors = require('cors');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT;
const corsOptions = {
    origin: ['https://desol-fe.vercel.app', 'http://localhost:3000']
};
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});
// app.get('/', (req, res)=>{
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
