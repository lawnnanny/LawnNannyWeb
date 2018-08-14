import domainRequests from '../domainRequests.json';
import encrypt from './networkUtilities';

export const isTheCurrentUserLoggedIn = () => Promise((resolve) => {
  fetch(domainRequests.isLoggedIn, {
    method: 'POST',
  }).then(response => response.json()).then(data => resolve(data));
});

export const loginUser = usernameAndPassword => new Promise((resolve) => {
  fetch(domainRequests.login, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      username: usernameAndPassword.username,
      password: encrypt(usernameAndPassword.password),
    }),
  }).then(response => response.json()).then(data => resolve(data));
});

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
