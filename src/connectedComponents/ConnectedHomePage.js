import { connect } from "react-redux";
import Actions from "../reducers/Actions";
import HomePage from "../components/pages/HomePage";

const mapDispatchToProps = dispatch => ({
  setEmail: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setEmail,
      value
    };

    dispatch(action);
  },
  setPassword: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setPassword,
      value
    };

    dispatch(action);
  },
  setFirstName: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setFirstName,
      value
    };

    dispatch(action);
  },
  setLastName: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setLastName,
      value
    };

    dispatch(action);
  },
  setPasswordRepeat: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setPasswordRepeat,
      value
    };

    dispatch(action);
  },
  setAddress: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setAddress,
      value
    };

    dispatch(action);
  },
  setCity: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setCity,
      value
    };

    dispatch(action);
  },
  setAddressState: (event, data) => {
    const value = data.value;
    const action = {
      type: Actions.login.setAddressState,
      value
    };

    dispatch(action);
  },
  setZipcode: event => {
    const value = event.target.value;
    const action = {
      type: Actions.login.setZipcode,
      value
    };

    dispatch(action);
  },
  openLoginModal: () => {
    const action = {
      type: Actions.login.toggleLoginModal
    };

    dispatch(action);
  },
  closeLoginModal: () => {
    const action = {
      type: Actions.login.clear
    };

    dispatch(action);
  },
  openSignupModal: () => {
    const action = {
      type: Actions.login.toggleSignupModal
    };

    dispatch(action);
  },
  closeSignupModal: () => {
    const action = {
      type: Actions.login.clear
    };

    dispatch(action);
  }
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(HomePage);
