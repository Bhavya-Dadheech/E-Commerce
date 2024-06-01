import { ADD_WISHLIST } from "./wishlistTypes";
import { REMOVE_WISHLIST } from "./wishlistTypes";

export const addWishList = (state) => {
  return {
    type: ADD_WISHLIST,
    payload: state
  };
};

export const removeWishList = (state) => {
  return {
    type: REMOVE_WISHLIST,
    payload: state
  };
};
