import domainRequests from '../domainRequests.json';
import { encrypt, jsonToUrlEncode } from './networkUtilities';

export const isTheCurrentUserLoggedIn = () => {
  fetch(domainRequests.isLoggedIn, {
    method: 'POST',
  }).then(response => response.json());
};

export const loginUser = (usernameAndPassword) => {
  fetch(domainRequests.create, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: jsonToUrlEncode({
      username: usernameAndPassword.username,
      password: encrypt(usernameAndPassword.password),
    }),
  }).then(response => response.json());
};

export const createUser = userRequest => new Promise((resolve) => {
  fetch(domainRequests.create, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      password: encrypt(userRequest.password),
      email: userRequest.email,
    }),
  }).then(response => response.json()).then(data => resolve(data));
});
