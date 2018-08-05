import { connect } from 'react-redux';
import AppComponent from '../components/App';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({
  sidebarVisible: state.sidebar.visible,
});

const mapDispatchToProps = dispatch => ({
  setLoggedIn: () => {
    const action = {
      type: Actions.login.isLoggedIn,
    };

    dispatch(action);
  },
  setSidebar: () => {
    const action = {
      type: Actions.sidebar.setSidebar,
    };

    dispatch(action);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppComponent);
