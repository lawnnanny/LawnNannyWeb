import Actions from './Actions';

const getInitialState = () => ({
  requestPrice: '',
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
    default:
      return state;
  }
};
