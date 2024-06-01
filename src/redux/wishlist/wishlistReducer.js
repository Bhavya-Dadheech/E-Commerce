import { ADD_WISHLIST } from "./wishlistTypes";
import { REMOVE_WISHLIST } from "./wishlistTypes";

const serializedState = localStorage.getItem("appState");

export const wishlistState = serializedState ? JSON.parse(serializedState).wishlist : { wishlist: [] };

const wishlistReducer = (state = wishlistState, action) => {
  switch (action.type) {
    case ADD_WISHLIST:
      // Check if the item is already in the wishlist to avoid duplicates
      const itemExists = state.wishlist.find((item) => item.id === action.payload.id);
      if (itemExists) {
        return state;
      }
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    case REMOVE_WISHLIST:
      return {
        ...state,
        wishlist: state.wishlist.filter((item) => item.id !== action.payload.id)
      };
    default:
      return state;
  }
};

export default wishlistReducer;
