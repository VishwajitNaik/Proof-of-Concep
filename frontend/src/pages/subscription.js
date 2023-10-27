import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Subscription = () => {
  const [selectedInterval, setSelectedInterval] = useState('monthly');
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    // Fetch plans from your backend
    const fetchPlans = async () => {
      try {
        const backendUrl = 'http://api/subscription/details/:userId'; // Replace with your actual backend URL
        const response = await axios.get(backendUrl);
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">1. Monthly Pricing</h1>
      
      <div className="mb-4">
        <button
          className={`${
            selectedInterval === 'monthly'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          } py-2 px-4 rounded-md mr-4`}
          onClick={() => setSelectedInterval('monthly')}
        >
          Monthly
        </button>
        <button
          className={`${
            selectedInterval === 'yearly'
              ? 'bg-blue-500 text-white'
              : 'bg-gray-300 text-gray-600'
          } py-2 px-4 rounded-md`}
          onClick={() => setSelectedInterval('yearly')}
        >
          Yearly
        </button>
      </div>

      {/* Subscription Plan Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {plans.map((plan) => (
          <div key={plan._id} className="bg-white rounded-lg p-6 shadow-md">
            <h2 className="text-lg font-semibold">{plan.name}</h2>
            <p>Price: ${selectedInterval === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}/{selectedInterval === 'monthly' ? 'month' : 'year'}</p>
            {/* Add other plan details like video quality, resolution, etc. */}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p>Choose the right plan for you</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Next
        </button>
      </div>
    </div>
  );
};

export default Subscription;
