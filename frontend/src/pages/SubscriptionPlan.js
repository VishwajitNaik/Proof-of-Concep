// pages/payment.js
import React from 'react';

const Payment = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Complete Payment</h1>

      <p className="text-lg mb-4">
        Enter your credit or debit card details below:
      </p>

      <form className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            placeholder="Card Number"
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            id="expiration"
            name="expiration"
            placeholder="MM/YY"
            className="border rounded-lg p-2"
          />
          <input
            type="text"
            id="cvc"
            name="cvc"
            placeholder="CVC"
            className="border rounded-lg p-2"
          />
        </div>
      </form>

      <div className="bg-blue-200 p-4 rounded-lg">
        <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
        <p>
          <span className="text-gray-600">Plan Name:</span> Basic
        </p>
        <p>
          <span className="text-gray-600">Billing Cycle:</span> Monthly
        </p>
        <p>
          <span className="text-gray-600">Plan Price:</span> $20/mo
        </p>
      </div>

      <div className="mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default Payment;
