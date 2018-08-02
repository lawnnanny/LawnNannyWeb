import React from 'react';
import { Grid, Button, Segment, Header } from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/HomePage';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
const HomePage = props => (
  <Grid centered style={Styles.grid}>
    <Grid.Row verticalAlign="middle" style={Styles.headingRow}>
      <Segment style={Styles.headerSegment}>
        <Header style={Styles.header}>Quicker Easier Services</Header>
        <ButtonDiv style={Styles.div}>
          <Button
            style={Styles.requestButton}
            size="large"
            onClick={() => props.history.push('/pipeline')}
          >
            Make a Request
          </Button>
        </ButtonDiv>
      </Segment>
    </Grid.Row>
  </Grid>
);
export default HomePage;
