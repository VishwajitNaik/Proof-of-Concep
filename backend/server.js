const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3009;
const cors = require('cors');

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

require('dotenv').config();

// Configure CORS
app.use(cors());

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/POC', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// registration route
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// plan route
const planRoutes = require('./routes/planRoutes');
app.use('/api/plans', planRoutes);

const subscriptionRoutes = require('./routes/subscriptionRoutes');
app.use('/api/subscription', subscriptionRoutes);

// Add the Stripe payment route
app.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
