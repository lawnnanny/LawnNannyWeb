import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';

import Styles from '../../../styles/requestReview';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';

export const requestReview = (state) => {
  if (!state.typeOfRequest) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid centered container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <ConnectedBreadcrumbComponent selection={4} />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
export default requestReview;
