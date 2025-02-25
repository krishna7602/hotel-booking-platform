const express = require('express');
const router = express.Router();
const Hotel = require('../Models/hotel.model');

// Route to store hotel details
router.post('/hotels', async (req, res) => {
  try {
    const hotel = new Hotel(req.body);
    console.log(hotel);
    await hotel.save();
    res.status(200).send(hotel);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
