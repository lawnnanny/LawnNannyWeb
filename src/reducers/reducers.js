import { combineReducers } from "redux";
import login from "./Login";
import typeOfRequest from "./typeOfRequest";
import breadcrumb from "./breadcrumb";

export default combineReducers({
  login,
  typeOfRequest,
  breadcrumb
});
