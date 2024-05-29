import { SET_AUTH } from "./authenticationTypes";

export const setAuth = (state) => {
  return {
    type: SET_AUTH,
    payload: state
  };
};
