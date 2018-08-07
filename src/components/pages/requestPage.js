import React from 'react';
import { Grid, Image, Menu, Header, Button, Rating, Icon } from 'semantic-ui-react';
import Styles from '../../styles/requestPage';
import home from '../../images/trash.jpg';
import shane from '../../images/shane.png'
import UserReview from '../helpers/userReview';
import JobDescription from '../helpers/JobDescription';

const review = {
  fields: [
    {
      username: 'Tom Sawyer',
      date: 'January 6, 2016',
      rating: 5,
      text:
        'oir jewggp  oroirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewneng ore ngor ewn',
    },
    {
      username: 'Jack Sparrow',
      date: 'April 30, 2001',
      rating: 5,
      text:
        'oirje wgporoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnengor engorewn',
    },
    {
      username: 'Harry Potter',
      date: 'August 11, 2018',
      rating: 4,
      text:
        'oirjew gporoirjew oirjew gpore ngoren gorewngpooirjew gpore ngoren gorewnoirjew gpore ngoren gorewnre ngoren gorewne ngoren gorewn',
    },
    {
      username: 'William Shakespeare',
      date: 'July 4, 1776',
      rating: 2,
      text:
        'oirje woirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewngpo rengore ngorewn',
    },
    {
      username: 'Creepy Jack',
      date: 'Friday the 13th',
      rating: 5,
      text:
        'oirje wgoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnoirjew gpore ngoren gorewnpor engore ngorewn',
    },
  ],
};
const requestReview = () => {
  const renderReview = field => (
    <UserReview
      rating={field.rating}
      username={field.username}
      date={field.date}
      text={field.text}
    />
  );
  const renderReviews = (form) => {
    const formUI = form.fields.map(field => renderReview(field));
    return formUI;
  };
  return (
    <Grid container style={Styles.grid}>
      <Menu fixed="bottom" style={Styles.menu}>
        <Button style={Styles.requestButton}>Choose Request </Button>
      </Menu>
      <Grid.Row textAlign="center">
        <Image src={home} style={Styles.image} />
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
        <JobDescription
          title="Job Description:"
          text="s 1.10.32 and 1.10.33 of &quot;de Finibus Bonorum et Malorum&quot; (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of eth"
        />
      </Grid.Row>
      <Grid.Row textAlign="left">
        <Header as="h1" style={Styles.reviewHeader}>
          Top Reviews
        </Header>
        {renderReviews(review)}
      </Grid.Row>
    </Grid>
  );
};
export default requestReview;
