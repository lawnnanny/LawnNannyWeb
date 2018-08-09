import React from 'react';
import { Grid, Image, Menu, Header, Button, Rating, Segment, Icon, Label } from 'semantic-ui-react';
import styled from 'styled-components';
import device from '../../helpers/devices';
import Styles from '../../styles/requestPage';
import shane from '../../images/shane.png';
import home from '../../images/home.jpg';
import JobDescription from '../helpers/JobDescription';

const MyImage = styled(Image)`
  &&& {
    width: 100%;

    @media ${device.mobileS} {
      height: 270px;
    }
    @media ${device.mobileM} {
      height: 300px;
    }
    @media ${device.mobileL} {
      height: 330px;
    }
    @media ${device.tablet} {
      height: 440px;
    }
  }
`;

const requestPage = () => (
  <Grid container style={Styles.grid}>
    <Menu borderless fixed="bottom" style={Styles.bottomMenu} fluid>
      <Menu.Item style={Styles.priceItem}>
        <Label style={Styles.priceLabel}>
          <Icon name="dollar" style={Styles.priceIcon} />
          25
        </Label>
      </Menu.Item>
      <Menu.Item style={Styles.requestItem}>
        <Button style={Styles.requestButton}>Choose Request </Button>
      </Menu.Item>
    </Menu>
    <Grid.Row textAlign="center" style={Styles.imageRow}>
      <MyImage src={home} />
    </Grid.Row>
    <Grid.Row textAlign="left" style={Styles.headerRow}>
      <Header as="h1" style={Styles.header}>
        Small lawn by the river. No problems
      </Header>
    </Grid.Row>
    <Grid.Row textAlign="left" style={Styles.userRow}>
      <Header>
        <Image circular src={shane} style={Styles.userIcon} />
        Shane Drafahl
      </Header>
    </Grid.Row>
    <Grid.Row style={Styles.ratingRow}>
      <Rating disabled icon="star" defaultRating={5} maxRating={5} style={Styles.userRating} />
      <div style={Styles.ratingReviews}>10 Reviews</div>
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Segment style={Styles.descriptionSegment}>
        <Header>Job Description</Header>
      </Segment>
    </Grid.Row>
    <div style={Styles.bottomPadding} />
  </Grid>
);
export default requestPage;
