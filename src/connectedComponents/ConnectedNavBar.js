import { connect } from 'react-redux';
import navBarComponent from '../components/helpers/navBar';
import Actions from '../../reducers/Actions';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  isLoggedIn: (data) => {
    const action = {
      type: Actions.login.isLoggedIn,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  () => mapStateToProps,
  mapDispatchToProps,
)(navBarComponent);
