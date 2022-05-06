import { ADD_ITEM, DELETE_ITEM } from "./cartActionTypes";

const initialState = {
  itemsAdded: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      return {
        itemsAdded: [...state.itemsAdded, action.payload],
      };
    }
    case DELETE_ITEM: {
      const updatedItems = state.itemsAdded.filter(
        (item) => item.id !== action.payload
      );
      return {
        itemsAdded: updatedItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
