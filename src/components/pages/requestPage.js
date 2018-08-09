import React from 'react';
import { Grid, Image, Menu, Header, Button, Rating } from 'semantic-ui-react';
import styled from 'styled-components';
import device from '../../helpers/devices';
import Styles from '../../styles/requestPage';
import shane from '../../images/shane.png';
import home from '../../images/nicehome2.jpg';
import JobDescription from '../helpers/JobDescription';

const MyImage = styled(Image)`
  &&& {
    width: 100%;

    @media ${device.mobileS} {
      height: 320px;
    }
    @media ${device.mobileM} {
      height: 368px;
    }
    @media ${device.tablet} {
      height: 440px;
    }
  }
`;

const requestPage = props => (
  <Grid container style={Styles.grid}>
    <Menu fixed="bottom" style={Styles.menu}>
      <Button style={Styles.requestButton}>Choose Request </Button>
    </Menu>
    <Grid.Row textAlign="center" style={Styles.imageRow}>
      <MyImage src={home} />
    </Grid.Row>
    <Grid.Row textAlign="left" style={Styles.headerRow}>
      <Header as="h1" style={Styles.header}>
        Please Help! Unidentifyable beings growing in my lawn!
      </Header>
    </Grid.Row>
    <Grid.Row textAlign="left" style={Styles.userRow}>
      <Header>
        <Image circular src={shane} />
        Shane Drafahl
      </Header>
    </Grid.Row>
    <Grid.Row style={Styles.ratingRow}>
      <Rating disabled icon="star" defaultRating={1} maxRating={5} style={Styles.userRating} />
      10 Reviews
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Header as="h2">Grinnell 18 miles Away</Header>
    </Grid.Row>
    <Grid.Row textAlign="left">
      <JobDescription requests={props.requests} />
    </Grid.Row>
  </Grid>
);
export default requestPage;
