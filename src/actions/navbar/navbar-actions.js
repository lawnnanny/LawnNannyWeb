import Actions from '../../reducers/actions';
import { reduxActionCreatorNoData } from '../redux-action-creator';

const setLoggedIn = reduxActionCreatorNoData(Actions.login.isLoggedIn);
export default setLoggedIn;
