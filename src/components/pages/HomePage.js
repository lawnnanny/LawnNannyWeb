import React from 'react';
import { Grid, Button, Segment, Header, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/HomePage';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
const HomePage = props => (
  <Grid stackable centered style={Styles.grid}>
    <Grid.Row verticalAlign="middle" style={Styles.headingRow}>
      <Segment vertical style={Styles.headerSegment}>
        <Header style={Styles.header}>Quicker. Easier. Better.</Header>
        <ButtonDiv style={Styles.div}>
          <Button
            style={Styles.requestButton}
            size="large"
            onClick={() => props.history.push('/pipeline')}
          >
            Make a Request
          </Button>
        </ButtonDiv>
        <Header style={Styles.divider}> OR </Header>
        <ButtonDiv>
          <Button
            style={Styles.jobButton}
            size="large"
            onClick={() => props.history.push('/Requests')}
          >
            Find Requests Near You
          </Button>
        </ButtonDiv>
      </Segment>
    </Grid.Row>
  </Grid>
);
export default HomePage;
