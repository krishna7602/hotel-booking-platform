const express = require('express');
const app = express();
const connectDB = require('./db/db');
const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const cookieParser = require('cookie-parser');
const userRoutes = require('./Routes/user.routes');
const hotelRoutes = require('./Routes/hotel.routes');

connectDB();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/users', userRoutes);
app.use('/api', hotelRoutes);

module.exports = app;