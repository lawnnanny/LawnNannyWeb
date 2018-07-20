import { connect } from 'react-redux';
import requestPriceComponent from '../components/pages/pipeline/requestPrice';
import Actions from '../reducers/Actions';

const mapStateToProps = state => ({ typeOfRequest: state.requests.selection });

const mapDispatchToProps = dispatch => ({
  setRequestPrice: (data) => {
    const action = {
      type: Actions.requests.setRequestPrice,
      data,
    };
    dispatch(action);
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(requestPriceComponent);
