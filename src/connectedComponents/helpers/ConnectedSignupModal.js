import { connect } from 'react-redux';
import signupModalComponent from '../../components/helpers/signupModal';
import Actions from '../../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  signup: (data) => {
    const action = {
      type: Actions.login.signup,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(signupModalComponent);
