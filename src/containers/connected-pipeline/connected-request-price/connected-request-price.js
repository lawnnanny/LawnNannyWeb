import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as PipelineActions from '../../../actions/pipeline-actions';
import requestPriceComponent from '../../../pages/pipeline/request-price';

const mapStateToProps = state => ({
  typeOfRequest: state.requests.selection,
  requestPrice: state.requests.requestPrice,
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
)(requestPriceComponent);
