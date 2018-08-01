import Actions from './Actions';

const getInitialState = () => ({
  isLoggedIn: false,
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.login.login:
      return setState(state, 'loginDetails', action.data);
    case Actions.login.signup:
      return setState(state, 'signupDetails', action.data);
    case Actions.login.isLoggedIn:
      return setState(state, 'isLoggedIn', true);
    default:
      return state;
  }
};
