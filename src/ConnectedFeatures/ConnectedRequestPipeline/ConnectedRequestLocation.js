import { connect } from 'react-redux';
import requestLocationComponent from '../../features/requestPipeline/requestLocation';
import Actions from '../../reducers/Actions';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
});

const mapDispatchToProps = dispatch => ({
  setRequestLocation: (data) => {
    const action = {
      type: Actions.requests.setRequestLocation,
      data,
    };
    dispatch(action);
  },
  requestInProgress: (data) => {
    const action = {
      type: Actions.requests.requestInProgress,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestLocationComponent);