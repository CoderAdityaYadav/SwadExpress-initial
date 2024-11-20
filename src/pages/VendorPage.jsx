import React from "react";
import { useParams } from "react-router-dom";
import { vendors } from "../vendorsData";
import FoodCard from "../components/FoodCard";

const VendorPage = ({ addToCart }) => {
  const { id } = useParams();
  const vendor = vendors.find((v) => v.id === parseInt(id));

  if (!vendor) {
    return <p className="text-center mt-10">Vendor not found</p>;
  }

  return (
    <div className="vendor-page-container">
      <h1 className="vendor-name text-5xl font-bold mb-6 text-center">{vendor.name}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {vendor.catalog.map((item) => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default VendorPage;
