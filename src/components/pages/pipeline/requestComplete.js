import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Styles from '../../../styles/pipeline/requestComplete';
import BreadcrumbComponent from '../../helpers/breadcrumb';

class requestComplete extends Component {
  constructor() {
    super();
    this.state = {
      dataBaseError: null,
    };
  }
  render() {
    if (this.props.pageInProgress < 5) {
      return <Redirect to="/pipeline/requestReview" />;
    }
    return (
      <Grid centered container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <BreadcrumbComponent selection={this.props.pageInProgress} current={5} />
          </Segment>
        </Grid.Row>
        <Grid.Row>Complete</Grid.Row>
      </Grid>
    );
  }
}

requestComplete.propTypes = {
  pageInProgress: PropTypes.number,
};

requestComplete.defaultProps = {
  pageInProgress: 0,
};
export default requestComplete;
