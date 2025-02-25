const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  price_per_night: {
    type: Number,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  },
  amenities: {
    type: [String],
    required: true
  },
  image_url: {
    type: String,
    required: true
  },
  tagline: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Hotel = mongoose.model('Hotel', hotelSchema);
module.exports = Hotel;