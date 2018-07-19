let i = 0;

export default {
  login: {
    setRequestLogin: (i += 1),
    setRequestSignup: (i += 1),
  },
  requests: {
    setTypeOfRequest: (i += 1),
    setRequestInformation: (i += 1),
    setRequestLocation: (i += 1),
  },
};
