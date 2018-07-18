import { connect } from 'react-redux';
import navBarComponent from '../components/helpers/navBar';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({ typeOfRequest: state.requests.selection });

const mapDispatchToProps = dispatch => ({
  setRequestSignup: (data) => {
    const action = {
      type: Actions.login.setRequestSignup,
      data,
    };
    dispatch(action);
  },
  setRequestLogin: (data) => {
    const action = {
      type: Actions.login.setRequestLogin,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(navBarComponent);
