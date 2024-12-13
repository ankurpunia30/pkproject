const express = require('express');
const router = express.Router();
const Property = require('../models/property');

router.get('/', async (req, res) => {
    const properties = await Property.find();
    res.status(200).json(properties);
});

router.get('/recommendations', async (req, res) => {
    const { type } = req.query;
    const recommendations = await Property.find({ type });
    res.status(200).json(recommendations);
});

module.exports = router;
