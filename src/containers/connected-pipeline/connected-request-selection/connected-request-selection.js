import { connect } from 'react-redux';
import Actions from '../../../reducers/actions';
import RequestSelectionComponent from '../../../pages/pipeline/request-selection';

const mapStateToProps = state => ({
  pageInProgress: state.requests.requestInProgress,
});

const mapDispatchToProps = dispatch => ({
  setTypeOfRequest: (data) => {
    const action = {
      type: Actions.requests.setTypeOfRequest,
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
  () => mapStateToProps,
  mapDispatchToProps,
)(RequestSelectionComponent);
