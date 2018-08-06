import React from 'react';
import { Grid, Icon, Header, Rating } from 'semantic-ui-react';
import Styles from '../../styles/helpers/userReview';

const userReview = props => (
  <Grid container style={Styles.grid}>
    <Grid.Row style={Styles.userRow}>
      <Header>
        <Icon circular name="user" />
        {props.username}
      </Header>
    </Grid.Row>
    <Grid.Row style={Styles.dateRow}>
      <Header>{props.date}</Header>
    </Grid.Row>
    <Grid.Row style={Styles.ratingRow}>
      <Rating disabled icon="star" defaultRating={props.rating} maxRating={5} />
    </Grid.Row>
    <Grid.Row style={Styles.textRow}>
      <p>{props.text}</p>
    </Grid.Row>
  </Grid>
);

export default userReview;
