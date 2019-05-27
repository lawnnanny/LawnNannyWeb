import Actions from '../../reducers/actions';
import { reduxActionCreatorNoData } from '../redux-action-creator';

export const closeLoginModal = reduxActionCreatorNoData(Actions.login.closeLoginModal);
export const swapModal = reduxActionCreatorNoData(Actions.login.swapModal);
