import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-router-dom'

import HomePage from '../../components/pages/HomePage';


import Styles from '../../styles/requestPipeline';
import Actions from '../../reducers/Actions'
import { statekeys } from '../../helpers/Common' 

export class requestPipeline extends Component {
    render() {
    	const{
    } =this.props;

    return(
    	<div>
    	<h1>requestPipeline</h1>
    	</div>
    )
}
};
    const mapDispatchToProps = dispatch => {
    	return{

    	};
    }

    export default connect(() => { return {} }, mapDispatchToProps)(requestPipeline);