import { connect } from 'react-redux';
import signupModalComponent from '../../components/helpers/signupModal';
import Actions from '../../reducers/Actions';

const mapStateToProps = state => ({
  isSignupModalOpen: state.login.isSignupModalOpen,
});
const mapDispatchToProps = dispatch => ({
  closeSignupModal: () => {
    const action = {
      type: Actions.login.closeSignupModal,
    };

    dispatch(action);
  },
  swapModal: () => {
    const action = {
      type: Actions.login.swapModal,
    };

    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(signupModalComponent);
