import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as NavbarActions from '../../actions/navbar-actions';
import navBarComponent from '../../components/navbar';

const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...NavbarActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(navBarComponent);
