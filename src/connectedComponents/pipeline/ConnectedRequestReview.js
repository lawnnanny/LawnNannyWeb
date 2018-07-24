import { connect } from 'react-redux';
import requestReviewComponent from '../../components/pages/pipeline/requestReview';
import Actions from '../../reducers/Actions';

const mapStateToProps = state => ({ requests: state.requests });

const mapDispatchToProps = dispatch => ({
  setCompletedRequestPrice: (data) => {
    const action = {
      type: Actions.requests.setCompletedRequestPrice,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestReviewComponent);
