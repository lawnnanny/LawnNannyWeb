import { connect } from 'react-redux';
import navBarComponent from '../components/helpers/navBar';
import Actions from '../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    const action = {
      type: Actions.login.login,
      data,
    };
    dispatch(action);
  },
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
)(navBarComponent);
