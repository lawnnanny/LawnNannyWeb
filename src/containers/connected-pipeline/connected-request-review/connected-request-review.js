import { connect } from 'react-redux';
import RequestReviewComponent from '../../../pages/pipeline/request-review';
import Actions from '../../../reducers/actions';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
  isLoggedIn: state.login.isLoggedIn,
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
)(RequestReviewComponent);
