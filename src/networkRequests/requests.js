import axios from 'axios';
import domainRequests from '../domainRequests.json';

const handleRequest = locationData => new Promise((resolve) => {
  axios(domainRequests.handleRequest, {
    method: 'POST',
    data: locationData,
    withCredentials: true,
  }).then((response) => {
    resolve(response.data);
  });
});

export default handleRequest;
