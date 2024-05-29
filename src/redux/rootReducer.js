import { combineReducers } from "redux";
import authReducer from "./authentication/authenticationReducer";

const rootReducer = combineReducers({ auth: authReducer });

export default rootReducer;
