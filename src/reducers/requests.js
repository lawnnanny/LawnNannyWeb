import Actions from './Actions';

const getInitialState = () => ({
  requestPrice: 1,
  selection: '',
  requestInProgress: 0,
  requestInformation: '',
});

const setState = (previousState, property, newValue) =>
  Object.assign({}, previousState, {
    [property]: newValue,
  });

const incrementPrice = (state) => {
  let value = state;
  if (value === '1') {
    value = parseFloat(value);
  }
  return value + 1;
};
export default (state = getInitialState(), action) => {
  switch (action.type) {
    case Actions.requests.setTypeOfRequest:
      return setState(state, 'selection', action.data);
    case Actions.requests.setRequestInformation:
      return setState(state, 'requestInformation', action.data);
    case Actions.requests.setRequestLocation:
      return setState(state, 'requestLocation', action.data);
    case Actions.requests.setRequestPrice:
      return setState(state, 'requestPrice', action.value);
    case Actions.requests.incrementPrice:
      return setState(state, 'requestPrice', incrementPrice(state.requestPrice));
    case Actions.requests.decrementPrice:
      return setState(state, 'requestPrice', Math.max(1, state.requestPrice - 1));
    case Actions.requests.requestInProgress:
      return setState(state, 'requestInProgress', Math.max(state.requestInProgress, action.data));
    default:
      return state;
  }
};
