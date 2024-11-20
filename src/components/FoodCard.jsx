import React from "react";

const FoodCard = ({ item, addToCart }) => (
  <div className="food-card-container cursor-pointer">
    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
    <img
      src={item.image}
      alt={item.name}
      className="w-full object-cover transform transition-transform duration-300 hover:scale-105"
    />
    <p className="text-gray-700 mb-2">₹{item.price.toFixed(2)}</p>
    <button 
      onClick={() => addToCart(item)} 
      className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition-colors duration-300"
    >
      Add to Cart
    </button>
  </div>
);

export default FoodCard;
