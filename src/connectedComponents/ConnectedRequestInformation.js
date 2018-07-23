import { connect } from 'react-redux';
import Actions from '../reducers/Actions';
import requestInformationComponent from '../components/pages/pipeline/requestInformation';

const mapStateToProps = state => ({ redux: state.requests });

const mapDispatchToProps = dispatch => ({
  setRequestInformation: (data) => {
    const action = {
      type: Actions.requests.setRequestInformation,
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
)(requestInformationComponent);
