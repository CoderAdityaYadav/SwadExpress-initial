import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  const cartItemCount = cartItems.length;

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white flex justify-between items-center shadow-lg w-full fixed top-0 left-0 z-1000">
      <div className="flex items-center">
        {/* Make logo clickable */}
        <Link to="/">
          <img src="/logo.png" alt="Website Logo" className="w-10 h-10 mr-2 cursor-pointer" />
        </Link>
        <h1 className="text-3xl font-bold">SwadExpress</h1>
      </div>
      <div className="flex items-center">
        {/* Account Details Button */}
        <Link to="/account">
          <button className="bg-gray-800 px-4 py-2 rounded-full hover:bg-gray-700 flex items-center shadow-lg mr-4">
            Account
          </button>
        </Link>
        {/* Cart Button */}
        <Link to="/cart" className="relative flex items-center">
          <button className="bg-yellow-500 px-4 py-2 rounded-full hover:bg-yellow-400 flex items-center shadow-lg">
            Cart
          </button>
          {cartItemCount > 0 && (
            <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-600 text-white text-sm font-bold rounded-full text-center leading-6 -mt-2 -mr-2">
              {cartItemCount}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
