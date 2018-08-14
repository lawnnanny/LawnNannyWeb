import domainRequests from '../domainRequests.json';

const handleRequest = locationData => new Promise((resolve) => {
  fetch(domainRequests.handleRequest, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    },
    body: JSON.stringify(locationData),
  }).then(response => response.json()).then(data => resolve(data));
});

export default handleRequest;
