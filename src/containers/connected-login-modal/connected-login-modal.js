import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LoginModalActions from '../../actions/login-modal';
import loginModalComponent from '../../components/login-modal';

const mapStateToProps = state => ({
  isLoginModalOpen: state.login.isLoginModalOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...LoginModalActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(loginModalComponent);
