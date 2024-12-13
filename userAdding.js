// Import required libraries and the User model
const mongoose = require('mongoose');
const User = require('./models/user'); // Adjust path based on your file structure

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/real-estate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database connection error:', err));

// Dummy users
const dummyUsers = [
    {
        email: 'user1@example.com',
        password: 'password123',
    },
    {
        email: 'user2@example.com',
        password: 'password456',
    },
    {
        email: 'user3@example.com',
        password: 'password789',
    },
    {
        email: 'admin@example.com',
        password: 'admin123',
    },
];

// Insert dummy users
const insertDummyUsers = async () => {
    try {
        await User.insertMany(dummyUsers);
        console.log('Dummy users added successfully');
    } catch (err) {
        console.log('Error inserting dummy users:', err);
    } finally {
        mongoose.disconnect();
    }
};

// Execute the script
insertDummyUsers();
