import React from 'react';
import { Grid, Search } from 'semantic-ui-react';
import Styles from '../../styles/Requests';
import RequestCardComponent from '../helpers/requestCard';
import lawn from '../../images/homepage/lawn.jpg';

const jsonForm = {
  fields: [
    {
      image: lawn,
      header: 'Lawn in Newton',
      distance: '10 miles away',
      description: 'Full yard with a few trees scattered',
      price: '25',
      reviewCount: '86',
      rating: 4,
    },
    {
      image: lawn,
      header: 'Lawn in Newton',
      distance: '10 miles away',
      description: 'Full yard with a few trees scattered',
      price: '25',
      reviewCount: '86',
      rating: 2,
    },
    {
      image: lawn,
      header: 'Lawn in Newton',
      distance: '10 miles away',
      description: 'Full yard with a few trees scattered',
      price: '25',
      reviewCount: '86',
      rating: 3,
    },
  ],
};

const Requests = () => {
  const renderCard = field => (
    <RequestCardComponent
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
