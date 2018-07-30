import { connect } from 'react-redux';
import loginModalComponent from '../../components/helpers/loginModal';
import Actions from '../../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  login: (data) => {
    const action = {
      type: Actions.login.login,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(loginModalComponent);
