import axios from 'axios';
import domainRequests from '../domainRequests.json';
import encrypt from './networkUtilities';

export const isTheCurrentUserLoggedIn = () => Promise((resolve) => {
  axios(domainRequests.isLoggedIn, {
    method: 'POST',
    withCredentials: true,
  }).then((response) => {
    resolve(response.data);
  });
});

export const loginUser = usernameAndPassword => new Promise((resolve) => {
  axios(domainRequests.login, {
    method: 'POST',
    data: {
      username: usernameAndPassword.username,
      password: encrypt(usernameAndPassword.password) },
    withCredentials: true,
  }).then((response) => {
    resolve(response.data);
  });
});

export const createUser = userRequest => new Promise((resolve) => {
  axios(domainRequests.create, {
    method: 'POST',
    data: {
      email: userRequest.email,
      password: encrypt(userRequest.password),
    },
    withCredentials: true,
  }).then((response) => {
    resolve(response.data);
  });
});
