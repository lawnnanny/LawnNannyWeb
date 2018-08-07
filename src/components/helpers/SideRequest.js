import React from 'react';
import { Grid, Image, Header,Rating, Icon } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SideRequest';
import lawn from '../../images/homepage/lawn.jpg';

const SideRequest = props => (
  <Grid columns='equal'>
  <Grid.Row style={Styles.row}>
  <Grid.Column>
    <Header style={Styles.header}> {props.header}</Header>
    </Grid.Column>
    <Grid.Column>
    <Grid.Row>
    <Rating icon='star' defaultRating={props.rating} maxRating={5} />
    </Grid.Row>
    <Grid.Row style={Styles.priceRow}>
    <Icon name='dollar'/>
    {props.price}
    </Grid.Row>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default SideRequest;
