import { connect } from 'react-redux';
import requestPageComponent from '../components/pages/requestPage';

const mapStateToProps = state => ({
  requests: state.requests,
});

export default connect(
  mapStateToProps,
  {},
)(requestPageComponent);
