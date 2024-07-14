const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    location: { type: String, required: true }, // Ensure 'location' is required here
});

const User = mongoose.model('User', userSchema);

module.exports = User;
