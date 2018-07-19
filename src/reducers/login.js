import Actions from './Actions';

const getInitialState = () => ({});

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
    default:
      return state;
  }
};
