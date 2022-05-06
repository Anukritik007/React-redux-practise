import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, description, price }) => {
  const onAddToCart = () => {};

  return (
    <div className="card">
      <div className="title">{title}</div>
      <div>{description}</div>
      <div>$ {price}</div>
      <button onClick={onAddToCart}>Add to cart</button>
    </div>
  );
};

export default ProductCard;
