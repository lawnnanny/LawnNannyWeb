import Actions from '../../reducers/actions';
import { reduxActionCreatorNoData } from '../redux-action-creator';

export const closeSignupModal = reduxActionCreatorNoData(Actions.login.closeSignupModal);
export const swapModal = reduxActionCreatorNoData(Actions.login.swapModal);
