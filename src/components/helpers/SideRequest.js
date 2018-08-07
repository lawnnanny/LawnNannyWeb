import React from 'react';
import { Grid, Image, Header,Rating, Icon , Label} from 'semantic-ui-react';
import styled from 'styled-components';
import Styles from '../../styles/helpers/SideRequest';

const HeaderColumn = styled(Grid.Column)`
  & {
    margin-top:0 !important;
    }
  }
`;
const SideRequest = props => (
  <Grid columns='equal'>
  <Grid.Row style={Styles.row}>
  <Label attached='top right' style={Styles.price}>
  <Icon name='dollar' style={Styles.priceIcon}/>
  {props.price}
  </Label>
  <HeaderColumn style={Styles.column}>
    <Header style={Styles.header}> {props.header}</Header>
    </HeaderColumn>
    <Grid.Column style={Styles.column}>
    <Grid.Row>
    <Rating disabled icon='star' defaultRating={props.rating} maxRating={5} />
    </Grid.Row>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default SideRequest;
