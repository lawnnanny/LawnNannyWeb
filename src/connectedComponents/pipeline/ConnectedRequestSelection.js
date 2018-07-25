import { connect } from 'react-redux';
import Actions from '../../reducers/Actions';
import requestSelectionComponent from '../../components/pages/pipeline/requestSelection';

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
)(requestSelectionComponent);
