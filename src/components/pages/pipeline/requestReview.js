import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';

import Styles from '../../../styles/requestReview';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';

export default class requestInformation extends Component {
  componentWillMount() {
    this.props.setCompletedRequestPrice();
  }
  render() {
    return (
      <Grid centered container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <ConnectedBreadcrumbComponent selection={4} />
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}
