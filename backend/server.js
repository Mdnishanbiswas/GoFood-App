
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/createuser', require('./Routes/CreateUser'));
app.use('/api/loginuser', require('./Routes/LoginUser'));
app.use('/api/protected', require('./Routes/protectedRoute'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
