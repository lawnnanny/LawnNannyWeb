import { connect } from 'react-redux';
import Actions from '../../../reducers/actions';
import RequestInformationComponent from '../../../pages/pipeline/request-information';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
});

const mapDispatchToProps = dispatch => ({
  setRequestInformation: (data) => {
    const action = {
      type: Actions.requests.setRequestInformation,
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
)(RequestInformationComponent);
