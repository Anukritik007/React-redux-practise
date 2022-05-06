import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
} from "./ProductActionTypes";

export const fetchProducts = () => {
  return (dispatch) => {
    //start
    dispatch({
      type: FETCH_PRODUCTS,
    });

    //call API
    fetch("https://sabka-bazaar-apis.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: FETCH_PRODUCTS_SUCCESS,
          payload: data,
        });
      })
      .catch((err) =>
        dispatch({
          type: FETCH_PRODUCTS_FAILURE,
          payload: err,
        })
      );
  };
};
