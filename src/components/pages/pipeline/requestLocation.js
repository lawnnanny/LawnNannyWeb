import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { jsonForm } from './jsonForms/locationForm';
import Styles from '../../../styles/pipeline/requestInformation';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';

export const requestLocation = (props) => {
  let destinationString = '/pipeline/requestPrice';
  if (props.pageInProgress > 2) {
    jsonForm.Location.button = 'Save';
    destinationString = '/pipeline/requestReview';
  }
  if (props.pageInProgress < 2) {
    return <Redirect to="/pipeline/requestInformation" />;
  }
  return (
    <Grid container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={2} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            popup
            jsonForm={() => jsonForm}
            reduxInfo={props.requests.requestLocation}
            setRequest={props.setRequestLocation}
            form={'Location'}
            route={() => {
              props.requestInProgress(3);
              props.history.push(destinationString);
            }}
          />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
requestLocation.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.obj,
  setRequestLocation: PropTypes.func,
  requestInProgress: PropTypes.number,
  history: PropTypes.func,
};

requestLocation.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.obj,
  setRequestLocation: PropTypes.func,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default requestLocation;
