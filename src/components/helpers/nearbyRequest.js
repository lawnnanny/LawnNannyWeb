import React from 'react';
import styled from 'styled-components';
import { Image, Header, Icon, List, Card } from 'semantic-ui-react';
import Styles from '../../styles/requestPage';

const ListItem = styled(List.Item)`
  &&& {
    :hover {
      transform: translateY(4px);
    }
  }
`;

const MyCard = styled(Card)`
  &[style] {
    :hover {
      box-shadow: 0 12px 24px -2px gray !important;
    }
  }
`;

export const nearbyRequest = props => (
  <ListItem style={Styles.nearbyItem}>
    <MyCard style={Styles.nearbyCard}>
      <Image src={props.image} />
      <Card.Content style={Styles.cardContent}>
        <Header style={Styles.cardHeader}>
          <Icon name="dollar" style={Styles.dollarIcon} />
          {props.price}
          {props.city}
        </Header>
      </Card.Content>
    </MyCard>
  </ListItem>
);
export default nearbyRequest;
