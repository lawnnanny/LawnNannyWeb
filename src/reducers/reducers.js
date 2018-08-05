import { combineReducers } from 'redux';
import login from './login';
import requests from './requests';
import sidebar from './sidebar';

export default combineReducers({
  requests,
  login,
  sidebar,
});
