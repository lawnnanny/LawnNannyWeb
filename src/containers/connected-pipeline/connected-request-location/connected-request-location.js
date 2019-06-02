import { connect } from 'react-redux';
import RequestLocationComponent from '../../../pages/pipeline/request-location';
import Actions from '../../../reducers/actions';

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
)(RequestLocationComponent);
