import { connect } from 'react-redux';
import Actions from '../reducers/Actions';
import requestInformationComponent from '../components/pages/pipeline/requestInformation';

const mapStateToProps = state => ({ typeOfRequest: state.requests.selection });

const mapDispatchToProps = dispatch => ({
  setRequestInformation: (data) => {
    const action = {
      type: Actions.requests.setRequestInformation,
      data,
    };
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(requestInformationComponent);
