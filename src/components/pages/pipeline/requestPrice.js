import React from 'react';
import { Grid, Segment, Header, Icon, Input, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Styles from '../../../styles/requestPrice';
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
        <Grid.Column>
          <Grid.Row style={Styles.triangleTopRow}>
            <Icon name="triangle up" style={Styles.topTriangle} />
          </Grid.Row>
          <Grid.Row style={Styles.priceRow}>
            <Input icon="dollar" iconPosition="left" placeholder="Set Price" style={Styles.input} />
          </Grid.Row>
          <Grid.Row style={Styles.triangleBottomRow}>
            <Icon name="triangle down" style={Styles.bottomTriangle} />
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
