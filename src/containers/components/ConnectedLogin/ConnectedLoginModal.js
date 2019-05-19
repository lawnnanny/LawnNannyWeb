import { connect } from 'react-redux';
import loginModalComponent from '../../../components/login/loginModal';
import Actions from '../../../reducers/Actions';

const mapStateToProps = state => ({
  isLoginModalOpen: state.login.isLoginModalOpen,
});
const mapDispatchToProps = dispatch => ({
  closeLoginModal: () => {
    const action = {
      type: Actions.login.closeLoginModal,
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
)(loginModalComponent);
