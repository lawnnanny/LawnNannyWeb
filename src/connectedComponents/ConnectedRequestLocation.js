import { connect } from 'react-redux';
import requestLocationComponent from '../components/pages/pipeline/requestLocation';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({ redux: state.requests });

const mapDispatchToProps = dispatch => ({
  setRequestLocation: (data) => {
    const action = {
      type: Actions.requests.setRequestLocation,
      data,
    };
    dispatch(action);
  },
  setCompletedRequestLocation: (data) => {
    const action = {
      type: Actions.requests.setCompletedRequestLocation,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestLocationComponent);
