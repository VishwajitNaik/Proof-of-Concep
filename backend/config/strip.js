// Inside your controller or route handler
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a subscription for a customer
const createSubscription = async (customerId, priceId) => {
  try {
    const subscription = await stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }],
    });
    return subscription;
  } catch (error) {
    // Handle any errors
    throw error;
  }
};

// Example usage
const customerId = 'customer_id_from_your_database'; // The customer's ID
const priceId = 'price_id_from_your_stripe_dashboard'; // The price ID for the selected plan

createSubscription(customerId, priceId)
  .then((subscription) => {
    // Handle the successful subscription creation
    console.log('Subscription created:', subscription);
  })
  .catch((error) => {
    // Handle errors
    console.error('Subscription creation failed:', error);
  });
