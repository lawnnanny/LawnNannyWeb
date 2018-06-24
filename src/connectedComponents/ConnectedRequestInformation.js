import { connect } from "react-redux";
import requestInformationComponent from "../components/pages/pipeline/requestInformation";

const mapStateToProps = (state) => ({typeOfRequest: state.typeOfRequest.selection})

export default connect(mapStateToProps)(requestInformationComponent);
