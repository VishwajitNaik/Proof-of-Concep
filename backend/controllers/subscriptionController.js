// controllers/subscriptionController.js


const getSubscriptionDetails = async (req, res) => {
    try {
      const { userId } = req.params; // Assuming the user's ID is in the URL
  
      // Find the user's subscription by their ID
      const user = await User.findById(userId).populate('subscription'); // Assuming you have a reference to the subscription in the User model
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      if (!user.subscription) {
        return res.status(404).json({ message: 'Subscription not found for this user' });
      }
  
      return res.status(200).json(user.subscription);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Failed to fetch subscription details' });
    }
  };
  

// Cancel a subscription
const cancelSubscription = async (req, res) => {
    try {
      const { customerId, stripeSubscriptionId } = req.body;
  
      const subscription = await Subscription.findOne({ customerId });
  
      if (!subscription || subscription.stripeSubscriptionId !== stripeSubscriptionId) {
        return res.status(404).json({ message: 'Subscription not found' });
      }
  
      // Use Stripe to cancel the subscription
      const canceledSubscription = await stripe.subscriptions.del(stripeSubscriptionId);
  
      // Update the subscription status in your database
      subscription.status = 'canceled';
      await subscription.save();
  
      return res.status(200).json(canceledSubscription);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Subscription cancellation failed' });
    }
  };
  
  module.exports = {
    getSubscriptionDetails,
    cancelSubscription,
  };
  