import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PipelineActions from '../../../actions/pipeline-actions';
import requestLocationComponent from '../../../pages/pipeline/request-location';

const mapStateToProps = state => ({
  requests: state.requests,
  pageInProgress: state.requests.requestInProgress,
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
)(requestLocationComponent);
