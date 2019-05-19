import { connect } from 'react-redux';
import requestPriceComponent from '../../../../pages/pipeline/requestPrice/requestPrice';
import Actions from '../../../../reducers/Actions';

const mapStateToProps = state => ({
  typeOfRequest: state.requests.selection,
  requestPrice: state.requests.requestPrice,
  pageInProgress: state.requests.requestInProgress,
});
const mapDispatchToProps = dispatch => ({
  setRequestPrice: (event) => {
    const stringValue = event.target.value;
    let value = parseFloat(stringValue);
    if (isNaN(value) || value === 0) {
      value = '';
    }
    const action = {
      type: Actions.requests.setRequestPrice,
      value,
    };

    dispatch(action);
  },
  incrementRequestPrice: () => {
    const action = {
      type: Actions.requests.incrementPrice,
    };

    dispatch(action);
  },
  decrementRequestPrice: () => {
    const action = {
      type: Actions.requests.decrementPrice,
    };

    dispatch(action);
  },
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
)(requestPriceComponent);
