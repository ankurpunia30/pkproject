const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/auth');
const propertyRoutes = require('./routes/properties');

app.use('/auth', authRoutes);
app.use('/properties', propertyRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/real-estate', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
