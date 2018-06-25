let i = 0;

export default {
  login: {
    setEmail: (i += 1),
    setPassword: (i += 1),
    setFirstName: (i += 1),
    setLastName: (i += 1),
    setPasswordRepeat: (i += 1),
    setAddress: (i += 1),
    setCity: (i += 1),
    setAddressState: (i += 1),
    setZipcode: (i += 1),
    clearPassword: (i += 1),
    toggleLoginModal: (i += 1),
    clear: (i += 1),
    toggleSignupModal: (i += 1)
  },
  requests: {
    setTypeOfRequest: (i += 1)
  },
  breadcrumb: {
    toggleRequestActive: (i += 1),
    toggleDetailsActive: (i += 1),
    toggleLocationActive: (i += 1),
    togglePriceActive: (i += 1),
    toggleReviewActive: (i += 1),
    toggleRequestCompleted: (i += 1),
    toggleDetailsCompleted: (i += 1),
    toggleLocationCompleted: (i += 1),
    togglePriceCompleted: (i += 1),
    toggleReviewCompleted: (i += 1)
  }
};
