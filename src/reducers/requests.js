import Actions from './Actions';

const getInitialState = () => ({
  requestPrice: 1,
  selection: '',
  requestInProgress: 0,
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
    case Actions.requests.setRequestPrice:
      return setState(state, 'requestPrice', action.value);
    case Actions.requests.incrementPrice:
      return setState(state, 'requestPrice', state.requestPrice + 1);
    case Actions.requests.decrementPrice:
      return setState(state, 'requestPrice', Math.max(1, state.requestPrice - 1));
    case Actions.requests.requestInProgress:
      return setState(state, 'requestInProgress', Math.max(state.requestInProgress, action.data));
    default:
      return state;
  }
};
