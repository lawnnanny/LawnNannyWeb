import { connect } from 'react-redux';
import requestLocationComponent from '../components/pages/pipeline/requestLocation';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({ requests: state.requests });

const mapDispatchToProps = dispatch => ({
  setRequestLocation: (data) => {
    const action = {
      type: Actions.requests.setRequestLocation,
      data,
    };
    dispatch(action);
  },
  setCompletedRequestInformation: (data) => {
    const action = {
      type: Actions.requests.setCompletedRequestInformation,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestLocationComponent);
