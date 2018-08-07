import React from 'react';
import { Grid, Image, Header,Rating, Icon , Label} from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/helpers/SideRequest';

const SideRequest = props => (
  <Grid columns='equal' onClick={props.onClick}>
  <Grid.Row style={Styles.row}>
  <Grid.Column style={Styles.column}>
    <Header style={Styles.header}> {props.header}</Header>
    </Grid.Column>
    <Grid.Column style={Styles.column}>
    <Label attached='top right' style={Styles.price}>
    <Icon name='dollar' style={Styles.priceIcon}/>
    {props.price}
    </Label>
    <Grid.Row textAlign='right'>
    <Rating disabled icon='star' defaultRating={props.rating} maxRating={5} style={Styles.rating}/>
    </Grid.Row>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default SideRequest;
