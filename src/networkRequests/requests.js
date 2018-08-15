import axios from 'axios';
import domainRequests from '../domainRequests.json';

const handleRequest = locationData => new Promise((resolve) => {
  console.log(locationData);
  axios(domainRequests.handleRequest, {
    method: 'POST',
    data: locationData,
    withCredentials: true,
  }).then((response) => {
    console.log(response);
    resolve(response.data);
  });
});

export default handleRequest;
