import React from 'react';
import { Grid, Image, Menu, Header, Button, Rating } from 'semantic-ui-react';
import Styles from '../../styles/requestPage';
import home from '../../images/nicehome2.jpg';
import UserReview from '../helpers/userReview';

const review = {
  fields:[
    {
  username: 'Tom Sawyer',
  date: 'January 6, 2016',
  rating: 4,
  text: 'oirjewgporengorengorewn',
},
]
};
const Reviews = (props) => {
  const reviewCard = field => (
    <UserReview
    rating={field.rating}
    username={field.username}
    date={field.date}
    text={field.text}
    />
  );
  const renderCards = (form) => {
    const formUI = form.fields.map(field => renderCard(field));
    return formUI;
  };
const requestReview = () => (
  <Grid container style={Styles.grid}>
    <Menu fixed="bottom" style={Styles.menu}>
      <Button style={Styles.requestButton}>Choose Request </Button>
    </Menu>
    <Grid.Row textAlign="center">
      <Image src={home} style={Styles.image} />
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Header as="h1">Nice Clean Lawn with a few trees in backyard</Header>
      <Rating disabled icon="star" defaultRating={3} maxRating={4} />
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Header as="h2">Newton 10 miles Away</Header>
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Header as="h3" style={Styles.descriptionHeader}>
        Lawn Description
      </Header>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industrys standard dummy text ever since the cheese, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the cheese with the release of Letraset sheets containing Lorem Ipsum
        passages, and more recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.
      </p>
    </Grid.Row>
    <Grid.Row textAlign="left">
      <Header as="h1" style={Styles.reviewHeader}>
        Top Reviews
      </Header>
    {renderReviews(review)}
    </Grid.Row>
  </Grid>
);

export default requestReview;
