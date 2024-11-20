import React from "react";

const VendorCard = ({ logo, name, onClick }) => (
  <div 
    onClick={onClick} 
    className="card-container cursor-pointer"
  >
    <img src={logo} alt={name} />
    <h2>{name}</h2>
  </div>
);

export default VendorCard;
