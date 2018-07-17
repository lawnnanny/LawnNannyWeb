import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { jsonForm } from './jsonForms/informationForm';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/requestInformation';

export const requestInformation = (state) => {
  if (!state.typeOfRequest) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid container style={Styles.grid}>
      <Grid.Row>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={1} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            jsonForm={() => jsonForm}
            setRequest={state.setRequestInformation}
            form={state.typeOfRequest}
            route={() => {
              state.history.push('/pipeline/requestLocation');
            }}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
export default requestInformation;
