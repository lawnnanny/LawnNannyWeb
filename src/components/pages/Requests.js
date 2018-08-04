import React from 'react';
import { Grid, Search } from 'semantic-ui-react';
import Styles from '../../styles/Requests';
import RequestCardComponent from '../helpers/requestCard';
import lawn from '../../images/homepage/lawn.jpg';
import grinnell from '../../images/homepage/grinnell.png';
import pella from '../../images/homepage/pella.jpg';

const jsonForm = {
  fields: [
    {
      link: '/pipeline',
      image: lawn,
      header: 'Lawn in Newton',
      distance: '2 miles away',
      description: 'Full yard with a few trees scattered',
      price: '25',
      reviewCount: '11',
      rating: 5,
    },
    {
      link: '/HomePage',
      image: grinnell,
      header: 'Lawn in Grinnell',
      distance: '18 miles away',
      description: 'Small Yard not a lot of trouble.',
      price: '20',
      reviewCount: '6',
      rating: 4,
    },
    {
      link: '/pipeline/requestReview',
      image: pella,
      header: 'Lawn in Sully',
      distance: '14 miles away',
      description: 'Long grass in back may take longer',
      price: '30',
      reviewCount: '2',
      rating: 4,
    },
  ],
};

const Requests = () => {
  const renderCard = field => (
    <RequestCardComponent
      link={field.link}
      image={field.image}
      header={field.header}
      distance={field.distance}
      description={field.description}
      price={field.price}
      reviewCount={field.reviewCount}
      rating={field.rating}
    />
  );
  const renderCards = (form) => {
    const formUI = form.fields.map(field => renderCard(field));
    return formUI;
  };
  return (
    <Grid stackable centered style={Styles.grid}>
      <Grid.Row verticalAlign="middle">
        <Search placeholder="Type a location" />
      </Grid.Row>
      <Grid.Row centered>{renderCards(jsonForm)}</Grid.Row>
    </Grid>
  );
};
export default Requests;
