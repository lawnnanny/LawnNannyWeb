import React from 'react';
import { Grid, Dropdown, Segment, Header, Button } from 'semantic-ui-react';
import Styles from '../../styles/Requests';
import RequestCardComponent from '../helpers/requestCard';
import lawn from '../../images/homepage/lawn.jpg';
import grinnell from '../../images/homepage/grinnell.jpg';
import pella from '../../images/homepage/pella.jpg';

const jsonForm = {
  fields: [
    {
      link: '/pipeline',
      image: lawn,
      header: 'Lawn',
      city: 'Newton',
      description: 'Full yard with a few trees scattered',
      price: '25',
      reviewCount: '11',
      rating: 5,
    },
    {
      link: '/HomePage',
      image: grinnell,
      header: 'Lawn',
      city: 'Newton',
      description: 'Small Yard not a lot of trouble.',
      price: '20',
      reviewCount: '6',
      rating: 4,
    },
    {
      link: '/pipeline/requestReview',
      image: pella,
      header: 'Lawn',
      city: 'Sully',
      description: 'Long grass in back may take longer',
      price: '30',
      reviewCount: '2',
      rating: 4,
    },
  ],
};

const options = [
  { key: 'edit', text: 'Nearest Location', value: 'Nearest Location' },
  { key: 'delete', text: 'Lowest Price', value: 'Lowest Price' },
  { key: 'hide', text: 'Highest Price', value: 'Highest Price' },
  { key: 'hide', text: 'Best Rated', value: 'Best Rated' },
];
const DistanceOptions = [
  { key: 'edit', text: '20 Miles', value: '20' },
  { key: 'delete', text: '50 Miles', value: '50' },
  { key: 'hide', text: '100 Miles', value: '100' },
  { key: 'hide', text: '250 Miles', value: '250' },
];

const Requests = (props) => {
  const renderCard = field => (
    <RequestCardComponent
      history={props.history}
      link={field.link}
      image={field.image}
      header={field.header}
      city={field.city}
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
    <Grid stackable container centered style={Styles.grid}>
      <Grid.Row verticalAlign="middle">
        <Segment style={Styles.searchSegment}>
          <Header style={Styles.searchHeader}>Refine Search</Header>
          <Dropdown
            placeholder="Search By"
            selection
            options={options}
            style={Styles.searchDropdown}
          />
          <span style={Styles.within}>within</span>
          <Dropdown
            style={Styles.distanceDropdown}
            placeholder="Miles"
            selection
            options={DistanceOptions}
          />
          <Button fluid style={Styles.searchButton}>
            Search
          </Button>
        </Segment>
      </Grid.Row>
      <Grid.Row centered>{renderCards(jsonForm)}</Grid.Row>
    </Grid>
  );
};
export default Requests;
