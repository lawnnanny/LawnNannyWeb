import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PipelineActions from '../../../actions/pipeline-actions';
import requestReviewComponent from '../../../pages/pipeline/request-review';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...PipelineActions,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestReviewComponent);
