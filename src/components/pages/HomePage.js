import React from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Styles from '../../styles/HomePage';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
const HomePage = () => (
  <Grid container centered style={Styles.grid}>
    <Grid.Row>
      <Link to="/pipeline">
        <ButtonDiv>
          <Button style={Styles.pipelineButton} size="large">
            Make a Request
          </Button>
        </ButtonDiv>
      </Link>
    </Grid.Row>
  </Grid>
);
export default HomePage;
