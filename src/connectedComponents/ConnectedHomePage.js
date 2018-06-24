import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomePageComponent from '../components/pages/HomePage';
import * as LoginActions from '../actions/Login';

const mapDispatchToProps = dispatch => bindActionCreators({ ...LoginActions }, dispatch);

export default connect(undefined, mapDispatchToProps)(HomePageComponent);
