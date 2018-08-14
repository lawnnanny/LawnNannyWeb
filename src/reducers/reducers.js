import { combineReducers } from 'redux';
import login from './login';
import requests from './requests';
import { sessionReducer as session } from 'redux-react-session';

export default combineReducers({
  requests,
  login,
  session,
});
