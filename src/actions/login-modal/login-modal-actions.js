import Actions from '../../reducers/actions';
import createReduxAction from '../create-redux-action';

export const closeLoginModal = createReduxAction(Actions.login.closeLoginModal);
export const swapModal = createReduxAction(Actions.login.swapModal);
