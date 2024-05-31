import { SET_AUTH } from "./authenticationTypes";

const serializedState = localStorage.getItem("appState");

export const authState = serializedState
  ? JSON.parse(serializedState).auth
  : {
      username: "",
      password: ""
    };

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password
      };
    default:
      return state;
  }
};

export default authReducer;
