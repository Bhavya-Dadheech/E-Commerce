// cartActions.js
import { ADD_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./cartTypes";

export const addCart = (item) => {
  return {
    type: ADD_CART,
    payload: item
  };
};

export const removeCart = (item) => {
  return {
    type: REMOVE_CART,
    payload: item
  };
};

export const incrementQuantity = (item) => {
  return {
    type: INCREMENT_QUANTITY,
    payload: item
  };
};

export const decrementQuantity = (item) => {
  return {
    type: DECREMENT_QUANTITY,
    payload: item
  };
};
