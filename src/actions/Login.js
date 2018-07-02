import Actions from '../reducers/Actions';

export const setEmail = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setEmail,
    value,
  };

  dispatch(action);
};

export const setPassword = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setPassword,
    value,
  };

  dispatch(action);
};

export const setFirstName = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setFirstName,
    value,
  };

  dispatch(action);
};

export const setLastName = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setLastName,
    value,
  };

  dispatch(action);
};

export const setPasswordRepeat = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setPasswordRepeat,
    value,
  };

  dispatch(action);
};

export const setAddress = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setAddress,
    value,
  };

  dispatch(action);
};

export const setCity = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setCity,
    value,
  };

  dispatch(action);
};

export const setAddressState = event => (dispatch) => {
  const value = event.value;
  const action = {
    type: Actions.login.setAddressState,
    value,
  };

  dispatch(action);
};

export const setZipcode = event => (dispatch) => {
  const value = event.target.value;
  const action = {
    type: Actions.login.setZipcode,
    value,
  };

  dispatch(action);
};

export const openLoginModal = () => (dispatch) => {
  const action = {
    type: Actions.login.toggleLoginModal,
  };

  dispatch(action);
};

export const closeModal = () => (dispatch) => {
  const action = {
    type: Actions.login.clear,
  };

  dispatch(action);
};

export const openSignupModal = () => (dispatch) => {
  const action = {
    type: Actions.login.toggleSignupModal,
  };

  dispatch(action);
};
