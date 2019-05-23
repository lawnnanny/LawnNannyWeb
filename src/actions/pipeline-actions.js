import Actions from '../reducers/actions';

export const setRequestInformation = data => ({
  type: Actions.requests.setRequestInformation,
  data,
});
export const requestInProgress = data => ({
  type: Actions.requests.requestInProgress,
  data,
});

export const setTypeOfRequest = data => ({
  type: Actions.requests.setTypeOfRequest,
  data,
});

export const setRequestPrice = (event) => {
  const stringValue = event.target.value;
  let value = parseFloat(stringValue);
  if (isNaN(value) || value === 0) {
    value = '';
  }
  return {
    type: Actions.requests.setRequestPrice,
    value,
  };
};
