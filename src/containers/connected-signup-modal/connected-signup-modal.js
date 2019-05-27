import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import signupModalComponent from '../../components/signup-modal';
import * as SignupModalActions from '../../actions/signup-modal';

const mapStateToProps = state => ({
  isSignupModalOpen: state.login.isSignupModalOpen,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...SignupModalActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(signupModalComponent);
