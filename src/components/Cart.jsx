import React from "react";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Cart</h2>
      {cartItems.length ? (
        cartItems.map((item, index) => (
          <div key={index} className="flex justify-between my-2 border-b pb-2">
            <span>{item.name}</span>
            <span>₹{item.price.toFixed(2)}</span>
          </div>
        ))
      ) : (
        <p className="text-center">No items in cart.</p>
      )}
      {cartItems.length ? (
        <div className="flex justify-between font-bold mt-4">
          <span>Total:</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Cart;
