const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/user.routes');
const hotelRoutes = require('./Routes/hotel.routes');
// const connectDB = require('./db/db');
// connectDB();

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB database connection established successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

app.use('/api/users', userRoutes);
app.use('/api', hotelRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

