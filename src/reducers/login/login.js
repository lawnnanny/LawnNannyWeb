import Actions from '../Actions';

const getInitialState = () => ({
  isLoggedIn: true,
  isLoginModalOpen: false,
  isSignupModalOpen: false,
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

const closeModal = (state) => {
  let value = state;
  value = !value;
  return value;
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.login.login:
      return setState(state, 'loginDetails', action.data);
    case Actions.login.signup:
      return setState(state, 'signupDetails', action.data);
    case Actions.login.isLoggedIn:
      return setState(state, 'isLoggedIn', !state.isLoggedIn);
    case Actions.login.closeLoginModal:
      return setState(state, 'isLoginModalOpen', closeModal(state.isLoginModalOpen));
    case Actions.login.closeSignupModal:
      return setState(state, 'isSignupModalOpen', closeModal(state.isSignupModalOpen));
    case Actions.login.swapModal:
      return setState({
        isLoginModalOpen: closeModal(state.isLoginModalOpen),
        isSignupModalOpen: closeModal(state.isSignupModalOpen),
      });
    default:
      return state;
  }
};
