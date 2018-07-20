import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Styles from '../../styles/HomePage';

const HomePage = () => (
  <Grid container centered style={Styles.grid}>
    <Grid.Row>
      <Link to="/pipeline">
        <Button style={Styles.pipelineButton} size="large">
          Make a Request
        </Button>
      </Link>
    </Grid.Row>
  </Grid>
);
export default HomePage;
