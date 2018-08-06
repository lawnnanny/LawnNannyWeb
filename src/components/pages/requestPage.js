import React from 'react';
import { Grid, Image, Menu, Header, Button, Icon } from 'semantic-ui-react';
import Styles from '../../styles/requestPage';
import home from '../../images/nicehome.jpg';

const requestReview = () => (
  <Grid centered container style={Styles.grid}>
    <Menu fixed="bottom" style={Styles.menu}>
      <Menu.Menu position="right">
        <Button style={Styles.requestButton}>Choose Request </Button>
      </Menu.Menu>
    </Menu>
    <Grid.Row style={Styles.breadrow}>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
    <Grid.Row>
      <Image src={home} />
    </Grid.Row>
  </Grid>
);

export default requestReview;
