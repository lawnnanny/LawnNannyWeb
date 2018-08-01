import { connect } from 'react-redux';
import navBarComponent from '../components/helpers/navBar';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

export default connect(
  () => mapStateToProps,
  {},
)(navBarComponent);
