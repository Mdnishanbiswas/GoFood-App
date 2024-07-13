const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Adjust the path to your User model as necessary

router.post('/loginuser', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password }); // Adjust authentication logic as needed
        if (!user) {
            return res.status(400).json({ success: false, error: "Invalid credentials" });
        }
        res.json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, error: "Server error" });
    }
});

module.exports = router;
