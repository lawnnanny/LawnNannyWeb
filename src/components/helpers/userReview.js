import React from 'react';
import { Grid, Icon, Header, Rating } from 'semantic-ui-react';
import Styles from '../../styles/helpers/userReview';

const userReview = () => (
  <Grid container style={Styles.grid}>
    <Grid.Row style={Styles.userRow}>
      <Header>
        <Icon circular name="user" />
        Persons Name
      </Header>
    </Grid.Row>
    <Grid.Row style={Styles.dateRow}>
      <Header>September 4, 1987</Header>
    </Grid.Row>
    <Grid.Row style={Styles.ratingRow}>
      <Rating disabled icon="star" defaultRating={3} maxRating={5} />
    </Grid.Row>
    <Grid.Row style={Styles.textRow}>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the cheese, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into
      </p>
    </Grid.Row>
  </Grid>
);

export default userReview;
