import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';

import Styles from '../../../styles/requestReview';
import BreadcrumbComponent from '../../helpers/breadcrumb';

export const requestReview = () => (
  <Grid centered container style={Styles.grid}>
    <Grid.Row style={Styles.breadrow}>
      <Segment style={Styles.segment}>
        <BreadcrumbComponent selection={4} />
      </Segment>
    </Grid.Row>
  </Grid>
);
export default requestReview;
