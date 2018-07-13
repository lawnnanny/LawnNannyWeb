import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import Styles from '../../../styles/requestInformation';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';

export const requestLocation = (state) => {
  if (!state.typeOfRequest) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid container style={Styles.Grid}>
      <Grid.Row>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent activeStep={2} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            setRequest={state.setRequestLocation}
            requestType={'Location'}
            requestForm={'address'}
            route={() => {
              state.history.push('/pipeline/review');
            }}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
export default requestLocation;
