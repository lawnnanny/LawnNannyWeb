import { connect } from 'react-redux';
import signupModalComponent from '../../components/helpers/signupModal';
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
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(signupModalComponent);
