import Actions from '../../reducers/actions';
import { reduxActionCreator } from '../redux-action-creator';

export const setRequestInformation = reduxActionCreator(Actions.requests.setRequestInformation);
export const setTypeOfRequest = reduxActionCreator(Actions.requests.setTypeOfRequest);
export const setRequestPrice = reduxActionCreator(Actions.requests.setRequestPrice);
export const requestInProgress = reduxActionCreator(Actions.requests.requestInProgress);
