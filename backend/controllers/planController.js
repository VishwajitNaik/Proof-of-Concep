// controllers/planController.js
const Plan = require('../models/Plan');

// Fetch all available plans
const getAllPlans = async (req, res) => {
  try {
    const plans = await Plan.find();
    return res.status(200).json(plans);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to fetch plans' });
  }
};

module.exports = {
  getAllPlans,
};
