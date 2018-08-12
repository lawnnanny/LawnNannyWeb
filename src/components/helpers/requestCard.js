import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Image, Card, Rating, Label, Header } from 'semantic-ui-react';
import Styles from '../../styles/helpers/RequestCard';

const MyCard = styled(Card)`
  &[style] {
    :hover {
      box-shadow: 6px 6px 20px 1px rgba(0, 0, 255, 0.2) !important;
    }
  }
`;

export const RequestCard = props => (
  <MyCard
    style={Styles.card}
    onClick={() => {
      props.history.push(props.link);
    }}
  >
    <Image
      style={Styles.image}
      src={props.image}
      label={{
        as: 'a',
        color: 'black',
        content: props.price,
        icon: 'dollar',
        ribbon: true,
        size: 'huge',
      }}
    />
    <Card.Content style={Styles.content}>
      <Card.Header style={Styles.header}>{props.header}</Card.Header>
      <Card.Meta style={Styles.subheader}>
        <span>{props.city}</span>
      </Card.Meta>
      <Card.Description style={Styles.description}>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content style={Styles.extra}>
      <Rating
        icon="star"
        disabled
        defaultRating={props.rating}
        maxRating={5}
        style={Styles.rating}
      />
      {props.reviewCount}
    </Card.Content>
  </MyCard>
);

export default RequestCard;
