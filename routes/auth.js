const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (user) {
        return res.status(200).json({ message: 'Login successful' });
    } else {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
});

router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
