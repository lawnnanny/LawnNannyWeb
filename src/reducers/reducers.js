import { combineReducers } from "redux";
import login from "./Login";
import typeOfRequest from "./typeOfRequest";

export default combineReducers({
  login,
  typeOfRequest
});
