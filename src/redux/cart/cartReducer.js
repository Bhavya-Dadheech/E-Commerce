import { ADD_CART, REMOVE_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY } from "./cartTypes";

const serializedState = localStorage.getItem("appState");

const initialState = serializedState ? JSON.parse(serializedState).cart : { cart: [] };

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      const itemIndex = state.cart.findIndex((item) => item.item.id === action.payload.id);
      if (itemIndex !== -1) {
        const updatedCart = state.cart.map((cartItem, index) =>
          index === itemIndex ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        return {
          ...state,
          cart: updatedCart
        };
      }
      return {
        ...state,
        cart: [...state.cart, { item: action.payload, quantity: 1 }]
      };
    case REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter((cartItem) => cartItem.item.id !== action.payload.id)
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.item.id === action.payload.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        )
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.item.id === action.payload.id
            ? { ...cartItem, quantity: Math.max(cartItem.quantity - 1, 1) }
            : cartItem
        )
      };
    default:
      return state;
  }
};

export default cartReducer;
