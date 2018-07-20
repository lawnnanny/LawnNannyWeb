import { connect } from 'react-redux';
import requestPriceComponent from '../components/pages/pipeline/requestPrice';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({ typeOfRequest: state.requests.selection });

const mapDispatchToProps = dispatch => ({
  setRequestPrice: (event) => {
    const value = event.target.value;
    const action = {
      type: Actions.requests.setRequestPrice,
      value,
    };

    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestPriceComponent);
