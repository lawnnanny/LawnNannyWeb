import { connect } from 'react-redux';
import NavBarComponent from '../components/helpers/navBar';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({ typeOfRequest: state.requests.selection });

const mapDispatchToProps = dispatch => ({
  setSignUp: (data) => {
    const action = {
      type: Actions.requests.setSignUp,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBarComponent);
