import React from "react";
import { useDispatch } from "react-redux";
import "./ProductCard.css";
import { addItemToCart } from "../../redux/cart/cartActions";

const ProductCard = ({ id, title, description, price }) => {
  const dispatch = useDispatch();
  const onAddToCart = () => {
    dispatch(
      addItemToCart({
        id,
        name: title,
      })
    );
  };

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
