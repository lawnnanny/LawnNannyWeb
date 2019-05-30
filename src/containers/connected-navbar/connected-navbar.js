import { connect } from 'react-redux';
import NavbarComponent from '../../components/navbar';
import Actions from '../../reducers/actions';

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
)(NavbarComponent);
