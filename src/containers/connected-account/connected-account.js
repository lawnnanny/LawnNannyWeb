import { connect } from 'react-redux';
import AccountComponent from '../../pages/account';
import Actions from '../../reducers/actions';

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
  closeSignupModal: () => {
    const action = {
      type: Actions.login.closeSignupModal,
    };

    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountComponent);
