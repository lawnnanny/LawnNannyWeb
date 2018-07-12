import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/requestInformation';

export const requestInformation = (state) => {
  if (!state.typeOfRequest) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid container style={Styles.Grid}>
      <Grid.Row>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent activeStep={1} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            setRequestInformation={state.setRequestInformation}
            requestType={state.typeOfRequest}
            requestForm={'Requests Details'}
            history={state.history.push}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
export default requestInformation;
