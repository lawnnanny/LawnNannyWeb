import { connect } from "react-redux";
import Actions from "../reducers/Actions";
import requestSelectionComponent from "../components/pages/pipeline/requestSelection";

const mapDispatchToProps = dispatch => ({
  setTypeOfRequest: (data) => {
    const action = {
      type: Actions.requests.setTypeOfRequest,
      data
    };
    dispatch(action);
  }

});

export default connect(
  () => ({}),
  mapDispatchToProps
)(requestSelectionComponent);
