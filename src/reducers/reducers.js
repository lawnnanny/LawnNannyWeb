import { combineReducers } from "redux";
import login from "./Login";
import requests from "./requests";

export default combineReducers({
  login,
  requests
});
