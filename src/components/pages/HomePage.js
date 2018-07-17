import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Modal, Input, Grid, Button, Form } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import NavBarComponent from '../helpers/navBar';

import Styles from '../../styles/HomePage';

const HomePage = () => (
  <Grid centered style={Styles.grid}>
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
