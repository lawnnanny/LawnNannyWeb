import { connect } from 'react-redux';
import requestLocationComponent from '../components/pages/pipeline/requestLocation';
import Actions from '../reducers/Actions';

const mapDispatchToProps = dispatch => ({
  setRequestLocation: (data) => {
    const action = {
      type: Actions.requests.setRequestLocation,
      data,
    };
    dispatch(action);
  },
});

export default connect(mapDispatchToProps)(requestLocationComponent);
