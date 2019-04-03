import { connect } from 'react-redux';
import navBarComponent from '../../features/navigationBar/navBar';
import Actions from '../../reducers/Actions';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn: () => {
    const action = {
      type: Actions.login.isLoggedIn,
    };

    dispatch(action);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(navBarComponent);
