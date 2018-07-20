import React from 'react';
import { Grid, Segment, Header, Icon, Input, Button, Image } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Styles from '../../../styles/requestPrice';
import up from '../../../images/pipeline/sort-down.png';
import down from '../../../images/pipeline/sort-up.png';
import BreadcrumbComponent from '../../helpers/breadcrumb';

export const requestPrice = (state) => {
  if (!state.typeOfRequest) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid centered container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={3} />
        </Segment>
      </Grid.Row>
      <Grid.Row style={Styles.headerRow}>
        <Header as="h1">Set A Price </Header>
      </Grid.Row>
      <Grid.Row style={Styles.priceRow}>
        <Grid.Column style={Styles.priceColumn}>
          <Grid.Row style={Styles.triangleTopRow}>
            <Button style={Styles.triangleTopButton}>
              <Image centered size="small" style={Styles.image} src={down} />
            </Button>
          </Grid.Row>
          <Grid.Row style={Styles.priceRow}>
            <Input icon="dollar" iconPosition="left" style={Styles.input} />
          </Grid.Row>
          <Grid.Row style={Styles.triangleBottomRow}>
            <Button style={Styles.triangleBottomButton}>
              <Image centered size="small" style={Styles.image} src={up} />
            </Button>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Button size="big" style={Styles.button}>
          Continue
        </Button>
      </Grid.Row>
    </Grid>
  );
};
export default requestPrice;
