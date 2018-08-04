import React from 'react';
import { Image, Card, Rating, Label } from 'semantic-ui-react';
import Styles from '../../styles/helpers/RequestCard';
import lawn from '../../images/homepage/lawn.jpg';

export const RequestCard = () => (
  <Card style={Styles.card}>
    <Image
      style={Styles.image}
      src={lawn}
      label={{
        as: 'a',
        color: 'black',
        content: '25',
        icon: 'dollar',
        ribbon: true,
        size: 'huge',
      }}
    />
    <Card.Content>
      <Card.Header style={Styles.header}>Lawn in Newton</Card.Header>
      <Card.Meta style={Styles.subheader}>
        <span>10 miles away</span>
      </Card.Meta>
      <Card.Description style={Styles.description}>
        Full yard with a few trees scattered
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Rating icon="star" defaultRating={4} maxRating={5} />
      86
    </Card.Content>
  </Card>
);

export default RequestCard;
