import Actions from './Actions';

const getInitialState = () => ({
  selection: '',
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.requests.setTypeOfRequest:
      return setState(state, 'selection', action.data);
    case Actions.requests.setRequestInformation:
      return setState(state, 'requestInformation', action.data);
    case Actions.requests.setRequestLocation:
      return setState(state, 'requestLocation', action.data);
    case Actions.requests.setRequestSignup:
      return setState(state, 'requestSignup', action.data);
    case Actions.requests.setRequestLogin:
      return setState(state, 'requestLogin', action.data);
    case Actions.requests.setSignUp:
      return setState(state, 'signup', action.data);
    default:
      return state;
  }
};
