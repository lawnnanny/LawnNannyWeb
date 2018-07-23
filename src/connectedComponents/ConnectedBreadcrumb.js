import { connect } from 'react-redux';
import breadcrumbComponent from '../components/helpers/breadcrumb';

const mapStateToProps = state => ({
  typeOfRequest: state.requests.selection,
  requestComplete: state.requests.completedRequest,
  priceComplete: state.requests.completedRequestPrice,
  locationComplete: state.requests.completedRequestLocation,
  infoComplete: state.requests.completedRequestInformation,
  reviewComplete: state.requests.completedRequestReview,
});

export default connect(
  mapStateToProps,
  {},
)(breadcrumbComponent);
