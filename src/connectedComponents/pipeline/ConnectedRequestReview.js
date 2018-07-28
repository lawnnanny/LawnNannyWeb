import { connect } from 'react-redux';
import requestReviewComponent from '../../components/pages/pipeline/requestReview';
import Actions from '../../reducers/Actions';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
});

const mapDispatchToProps = dispatch => ({
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
)(requestReviewComponent);
