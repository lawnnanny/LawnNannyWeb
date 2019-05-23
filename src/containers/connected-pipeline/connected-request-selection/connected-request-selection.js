import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PipelineActions from '../../../actions/pipeline-actions';
import requestSelectionComponent from '../../../pages/pipeline/request-selection';

const mapStateToProps = state => ({
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
  () => mapStateToProps,
  mapDispatchToProps,
)(requestSelectionComponent);
