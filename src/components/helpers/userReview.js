import React from 'react';
import { Grid, Icon, Header, Rating, Image } from 'semantic-ui-react';
import ShowMoreText from 'react-show-more-text';
import Styles from '../../styles/helpers/userReview';

const userReview = props => (
  <Grid container style={Styles.grid}>
    <Grid.Row style={Styles.userRow}>
      <Header>
        <Image circular src={props.image} style={Styles.userImage} />
        {props.username}
      </Header>
    </Grid.Row>
    <Grid.Row style={Styles.ratingRow}>
      <Rating disabled icon="star" defaultRating={props.rating} maxRating={5} />
    </Grid.Row>
    <Grid.Row style={Styles.dateRow}>
      <Header>{props.date}</Header>
    </Grid.Row>
    <Grid.Row style={Styles.textRow}>
      <ShowMoreText lines={2} more="Show more" less="Show less" onClick={this.executeOnClick}>
        <p>{props.text}</p>
      </ShowMoreText>
    </Grid.Row>
  </Grid>
);

export default userReview;
