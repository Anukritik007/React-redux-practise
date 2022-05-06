import { createStore, applyMiddleware, combineReducers } from "redux";
//thunk
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductReducer from "./products/ProductReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  products: ProductReducer,
  cart: cartReducer,
  //can add more
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
