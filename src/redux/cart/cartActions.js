import { ADD_ITEM, DELETE_ITEM } from "./cartActionTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

export const deleteItem = (prodId) => {
  return {
    type: DELETE_ITEM,
    payload: prodId,
  };
};
