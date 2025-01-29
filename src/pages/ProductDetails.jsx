import React from "react";
import { useLocation } from "react-router-dom";
import "./styles/ProductDetails.css";

const ProductDetails = () => {
  const { state } = useLocation();
  if (!state) {
    return <h2>Product not found</h2>;
  }

  const { name, description, shopName, location, contact, quantity, price, image } = state;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

  return (
    <div className="product-details-page">
      <img src={image} alt={name} className="product-image" />
      <h1>{name}</h1>
      <p className="product-description">{description}</p>
      <div className="product-info">
        <p><strong>Shop:</strong> {shopName}</p>
        <p><strong>Location:</strong> {location}</p>
        <p><strong>Contact:</strong> {contact}</p>
        <p><strong>Quantity:</strong> {quantity}</p>
        <p className="product-price">{price}</p>
      </div>
      <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer" className="directions-btn">Get Directions</a>
    </div>
  );
};

export default ProductDetails;
