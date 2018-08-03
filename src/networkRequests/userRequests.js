import domainRequests from '../domainRequests.json';

export const isTheCurrentUserLoggedIn = () => {
  fetch(domainRequests.isLoggedIn, {
    method: 'post',
  }).then(response => response.json());
};

export const createUser = (userRequest) => {
  fetch(domainRequests.create, {
    method: 'post',
    body: JSON.stringify(userRequest),
  }).then(response => response.json());
};

export const loginUser = (usernameAndPassword) => {
  fetch(domainRequests.create, {
    method: 'post',
    body: JSON.stringify(usernameAndPassword),
  }).then(response => response.json());
};
