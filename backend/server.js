const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/gofood', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define User Schema and Model
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  location: String,
});

const User = mongoose.model('User', userSchema);

// API Endpoint to create a user
app.post('/api/createuser', async (req, res) => {
  const { name, email, password, location } = req.body;

  if (!name || !email || !password || !location) {
    console.error('Validation Error: Missing required fields');
    return res.status(400).json({ success: false, message: 'All fields are required' });
  }

  try {
    const user = new User({ name, email, password, location });
    await user.save();
    res.status(201).json({ success: true, message: 'User created successfully' });
  } catch (error) {
    console.error('Internal Server Error:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
