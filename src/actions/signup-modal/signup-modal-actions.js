import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const closeSignupModal = createReduxAction(Actions.login.closeSignupModal);
export const swapModal = createReduxAction(Actions.login.swapModal);
