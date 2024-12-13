const mongoose = require('mongoose');
const Property = require('./models/property'); // Adjust path based on your file structure

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/real-estate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Database connection error:', err));

// Dummy data for properties in Mohali
const dummyProperties = [
    {
        title: 'Luxury Apartment in Sector 70',
        location: 'Sector 70, Mohali',
        price: 7500000,
        type: 'apartment',
        description: '3 BHK luxury apartment with modular kitchen and ample parking space.',
    },
    {
        title: 'Independent House in Phase 10',
        location: 'Phase 10, Mohali',
        price: 15000000,
        type: 'house',
        description: '5 BHK independent house with garden and premium furnishings.',
    },
    {
        title: 'Affordable Studio Apartment',
        location: 'Sector 68, Mohali',
        price: 2000000,
        type: 'studio',
        description: 'Fully furnished studio apartment ideal for single professionals.',
    },
    {
        title: 'Commercial Office Space',
        location: 'Industrial Area, Phase 8B, Mohali',
        price: 10000000,
        type: 'office',
        description: '2000 sq. ft. commercial office space in a prime industrial area.',
    },
    {
        title: 'Villa in Sector 125',
        location: 'Sector 125, Mohali',
        price: 25000000,
        type: 'villa',
        description: 'Luxurious 4 BHK villa with swimming pool and modern amenities.',
    },
];

// Insert dummy data
const insertDummyData = async () => {
    try {
        await Property.insertMany(dummyProperties);
        console.log('Dummy data added successfully');
    } catch (err) {
        console.log('Error inserting dummy data:', err);
    } finally {
        mongoose.disconnect();
    }
};

// Execute the script
insertDummyData();
