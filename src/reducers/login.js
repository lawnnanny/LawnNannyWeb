import Actions from './Actions';

const getInitialState = () => ({});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.login.setRequestLogin:
      return setState(state, 'requestLogin', action.data);
    case Actions.login.setRequestSignup:
      return setState(state, 'requestSignup', action.data);
    default:
      return state;
  }
};
