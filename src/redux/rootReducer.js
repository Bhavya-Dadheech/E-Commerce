import { combineReducers } from "redux";
import authReducer from "./authentication/authenticationReducer";
import wishlistReducer from "./wishlist/wishlistReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  wishlist: wishlistReducer,
  cart: cartReducer
});

export default rootReducer;
