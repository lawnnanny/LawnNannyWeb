import { connect } from 'react-redux';
import requestCompleteComponent from '../../../pages/pipeline/requestComplete';

const mapStateToProps = state => ({
  pageInProgress: state.requests.requestInProgress,
});

export default connect(
  () => mapStateToProps,
  {},
)(requestCompleteComponent);
