import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Styles from '../../../styles/pipeline/requestReview';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import DynamicDisplayComponent from '../../helpers/DynamicDisplay';
import SubmitModalComponent from '../../helpers/reviewModal';
import InlineError from '../../helpers/InlineError';

class requestReview extends Component {
  constructor() {
    super();
    this.state = {
      dataBaseError: null,
    };
  }

  render() {
    if (this.props.pageInProgress < 4) {
      return <Redirect to="/pipeline/requestPrice" />;
    }
    return (
      <Grid centered container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <BreadcrumbComponent selection={this.props.pageInProgress} current={4} />
          </Segment>
        </Grid.Row>
        {this.state.dataBaseError &&
             (<Grid.Row>
               <InlineError text={this.state.dataBaseError} pointing />
             </Grid.Row>)}
        <Grid.Row>
          <DynamicDisplayComponent requests={this.props.requests} />
        </Grid.Row>
        <Grid.Row style={Styles.submitRow}>
          <Segment style={Styles.buttonSegment}>
            <SubmitModalComponent />
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}

requestReview.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.obj,
};

requestReview.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.obj,
};
export default requestReview;
