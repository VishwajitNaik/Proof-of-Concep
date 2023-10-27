// models/Plan.js
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  interval: {
    type: String, // 'monthly' or 'yearly'
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Plan = mongoose.model('Plan', planSchema);

module.exports = Plan;
