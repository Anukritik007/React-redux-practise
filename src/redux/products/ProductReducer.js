import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./ProductActionTypes";

const initialState = {
  loading: true,
  data: null,
  error: "",
};

const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };

    case FETCH_PRODUCTS_FAILURE:
      return {
        loading: false,
        data: null,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default ProductReducer;
