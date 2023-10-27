// models/Subscription.js
const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
  },
  priceId: {
    type: String,
    required: true,
  },
  stripeSubscriptionId: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  // Additional fields for relevant data
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

module.exports = Subscription;
