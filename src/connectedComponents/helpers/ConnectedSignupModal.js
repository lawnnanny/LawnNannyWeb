import { connect } from 'react-redux';
import signupModalComponent from '../../components/helpers/signupModal';
import Actions from '../../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  signup: (data) => {
    const action = {
      type: Actions.login.signup,
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
)(signupModalComponent);
