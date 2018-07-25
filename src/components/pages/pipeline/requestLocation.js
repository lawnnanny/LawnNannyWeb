import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { jsonForm } from './jsonForms/locationForm';
import Styles from '../../../styles/requestInformation';
import DynamicFormComponent from '../../helpers/DynamicForm';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';

export const requestLocation = (state) => {
  if (!state.typeOfRequest) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <ConnectedBreadcrumbComponent selection={2} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            popup
            jsonForm={() => jsonForm}
            reduxInfo={state.requests.requestLocation}
            setRequest={state.setRequestLocation}
            form={'Location'}
            route={() => {
              state.history.push('/pipeline/requestPrice');
            }}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
export default requestLocation;
