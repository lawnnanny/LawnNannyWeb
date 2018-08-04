import React from 'react';
import { Grid, Search } from 'semantic-ui-react';
import Styles from '../../styles/Requests';
import RequestCardComponent from '../helpers/requestCard';
import lawn from '../../images/homepage/lawn.jpg';

const Requests = () => (
  <Grid stackable centered style={Styles.grid}>
    <Grid.Row verticalAlign="middle">
      <Search placeholder="Type a location" />
    </Grid.Row>
    <Grid.Row centered>
      <RequestCardComponent
        image={lawn}
        header={'Lawn in Newton'}
        distance={'10 miles away'}
        description={'Full yard with a few trees scattered'}
        price={'25'}
        reviewCount={'86'}
        rating={4}
      />
    </Grid.Row>
  </Grid>
);
export default Requests;
