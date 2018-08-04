import React from 'react';
import { Grid, Button, Segment, Header, Divider } from 'semantic-ui-react';
import Styles from '../../styles/Requests';
import RequestCardComponent from '../helpers/requestCard';

const Requests = () => (
  <Grid stackable centered style={Styles.grid}>
    <Grid.Row verticalAlign="middle">
      <Header />
    </Grid.Row>
    <Grid.Row>
      <RequestCardComponent />
    </Grid.Row>
  </Grid>
);
export default Requests;
