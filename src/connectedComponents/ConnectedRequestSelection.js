import { connect } from "react-redux";
import Actions from "../reducers/Actions";
import HomePageComponent from "../components/pages/HomePage";

const mapStateToProps = (state) => ({
    typeOfRequest: () => state.typeOfRequest
})

const mapDispatchToProps = dispatch => ({
  setTypeOfRequest: data => {
    const action = {
      type: Actions.login.setTypeOfRequest,
      data
    };

    dispatch(action);
  }

});

export default connect(
  () => ({}),
  mapDispatchToProps,
  mapStateToProps
)(HomePageComponent);
