import React from "react";
import Cart from "../components/Cart";

const CartPage = ({ cartItems }) => (
  <div className="p-6">
    <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
    <Cart cartItems={cartItems} />
  </div>
);

export default CartPage;
