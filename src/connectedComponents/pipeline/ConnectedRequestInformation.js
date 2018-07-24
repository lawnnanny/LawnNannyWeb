import { connect } from 'react-redux';
import Actions from '../reducers/Actions';
import requestInformationComponent from '../components/pages/pipeline/requestInformation';

const mapStateToProps = state => ({
  requests: state.requests,
  completedRequest: state.completedRequest,
  selection: state.selection,
});

const mapDispatchToProps = dispatch => ({
  setRequestInformation: (data) => {
    const action = {
      type: Actions.requests.setRequestInformation,
      data,
    };
    dispatch(action);
  },
  setCompletedRequest: () => {
    const action = {
      type: Actions.requests.setCompletedRequest,
    };
    dispatch(action);
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestInformationComponent);
