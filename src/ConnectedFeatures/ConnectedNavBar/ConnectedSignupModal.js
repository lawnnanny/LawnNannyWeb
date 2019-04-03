import { connect } from 'react-redux';
import signupModalComponent from '../../features/navigationBar/signupModal';
import Actions from '../../reducers/Actions';

const mapStateToProps = (state, ownProps) => ({
  signupDetailsJson: state.login,
  signupButton: ownProps.signupButton,
});

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
  mapStateToProps,
  mapDispatchToProps,
)(signupModalComponent);
