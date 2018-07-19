import { connect } from 'react-redux';
import navBarComponent from '../components/helpers/navBar';
import Actions from '../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  setRequestLogin: (data) => {
    const action = {
      type: Actions.login.setRequestLogin,
      data,
    };
    dispatch(action);
  },
  setRequestSignup: (data) => {
    const action = {
      type: Actions.login.setRequestSignup,
      data,
    };
    dispatch(action);
  },
});

export default connect(mapDispatchToProps)(navBarComponent);
