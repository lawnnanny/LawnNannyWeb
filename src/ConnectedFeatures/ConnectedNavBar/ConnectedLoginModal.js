import { connect } from 'react-redux';
import loginModalComponent from '../../features/navigationBar/loginModal';
import Actions from '../../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    const action = {
      type: Actions.login.login,
      data,
    };
    const action2 = {
      type: Actions.login.isLoggedIn,
      data,
    };
    dispatch(action);
    dispatch(action2);
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(loginModalComponent);
