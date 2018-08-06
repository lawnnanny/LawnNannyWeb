import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import Styles from '../../styles/requestPage';
import home from '../../images/nicehome.jpg';

const requestReview = () => (
  <Grid centered container style={Styles.grid}>
    <Grid.Row style={Styles.breadrow}>
      <Image src={home} />
    </Grid.Row>
  </Grid>
);

export default requestReview;
