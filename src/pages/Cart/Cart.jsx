import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../redux/cart/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const { itemsAdded } = useSelector((state) => state.cart);

  const onDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div>
      <h1>My Cart</h1>
      {itemsAdded &&
        itemsAdded.map((item) => (
          <div>
            {item.name}
            <button onClick={() => onDeleteItem(item.id)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
