import { combineReducers } from 'redux';
import login from './login';
import requests from './requests';

export default combineReducers({
  requests,
  login,
});
