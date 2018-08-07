import React from 'react';
import { Grid, Image, Header,Rating, Icon , Label} from 'semantic-ui-react';
import Styles from '../../styles/helpers/SideRequest';
import lawn from '../../images/homepage/lawn.jpg';

const SideRequest = props => (
  <Grid columns='equal'>
  <Grid.Row style={Styles.row}>
  <Label attached='top right' style={Styles.price}>
  <Icon name='dollar' style={Styles.priceIcon}/>
  {props.price}
  </Label>
  <Grid.Column style={Styles.column}>
  <Grid.Row>
    <Header style={Styles.header}> {props.header}</Header>
    </Grid.Row>
    </Grid.Column>
    <Grid.Column style={Styles.column}>
    <Grid.Row>
    <Rating disabled icon='star' defaultRating={props.rating} maxRating={5} />
    </Grid.Row>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default SideRequest;
