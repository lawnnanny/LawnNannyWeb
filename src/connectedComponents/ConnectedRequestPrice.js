import { connect } from 'react-redux';
import requestPriceComponent from '../components/pages/pipeline/requestPrice';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({
  typeOfRequest: state.requests.selection,
  requestPrice: state.requests.requestPrice,
});
const mapDispatchToProps = dispatch => ({
  setRequestPrice: (event) => {
    const stringValue = event.target.value;
    let value = parseFloat(stringValue);
    if (isNaN(value)) {
      value = '';
    }
    if (stringValue.indexOf('.') > -1 && stringValue[stringValue.length - 1] !== '.') {
      value = stringValue;
      value = parseFloat(value);
    } else if (stringValue.indexOf('.') > -1) {
      value = stringValue;
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
)(requestPriceComponent);
