import Actions from './Actions';

const getInitialState = () => ({
  requestPrice: 0,
  selection: '',
  completedRequest: false,
  completedRequestInformation: false,
  completedRequestLocation: false,
  completedRequestPrice: false,
  completedRequestReview: false,
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
      return setState(state, 'requestPrice', state.requestPrice - 1);
    case Actions.requests.setcompletedRequest:
      return setState(state, 'completedRequest', true);
    case Actions.requests.setcompletedRequestPrice:
      return setState(state, 'completedRequestPrice', true);
    case Actions.requests.setcompletedRequestInformation:
      return setState(state, 'completedRequestInformation', true);
    case Actions.requests.setcompletedRequestLocation:
      return setState(state, 'completedRequestLocation', true);
    case Actions.requests.setcompletedRequestReview:
      return setState(state, 'completedRequestReview', true);
    default:
      return state;
  }
};
