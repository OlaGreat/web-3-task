import React, { useState } from 'react';

const Cart = ({ cart, setCart }) => {
  const [coupon, setCoupon] = useState('');
  const [error, setError] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleApplyCoupon = () => {
    const regex = /^WEB3BRIDGECOHORTx$/;
    if (regex.test(coupon)) {
      setDiscountApplied(true);
      setError('');
    } else {
      setDiscountApplied(false);
      setError('Invalid coupon code.');
    }
  };

  const getTotal = () => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const discount = discountApplied ? subtotal * 0.1 : 0;
    return (subtotal - discount).toFixed(2);
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map(item => (
              <li key={item.id} className="flex justify-between items-center mb-2">
                <span>{item.name} x {item.quantity}</span>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="w-16 border rounded px-2"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-4">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter coupon code"
              className="border px-2 py-1 w-full rounded"
            />
            <button
              onClick={handleApplyCoupon}
              className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
            >
              Apply Coupon
            </button>
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>

          <div className="mt-4 font-bold text-lg">
            Total: ${getTotal()}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;