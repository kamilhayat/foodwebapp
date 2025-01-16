import React from "react";

const CartSummary = ({ subtotal, shipping, tax }) => {
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4">Order Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Subtotal</span>
        <span>₹{(subtotal / 100).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2">
        <span>Shipping estimate</span>
        <span>₹{(shipping / 100).toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Tax estimate</span>
        <span>₹{(tax / 100).toFixed(2)}</span>
      </div>
      <div className="flex justify-between font-bold text-lg mb-4">
        <span>Order total</span>
        <span>₹{(total / 100).toFixed(2)}</span>
      </div>
      <button className="w-full bg-purple-600 text-white py-2 rounded-lg">
        Checkout
      </button>
    </div>
  );
};

export default CartSummary;
