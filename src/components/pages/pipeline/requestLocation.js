import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { jsonForm } from './jsonForms/locationForm';
import Styles from '../../../styles/pipeline/requestLocation';
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
    <Grid
      md={9}
      lg={8}
      xl={7}
      alignItems="center"
      alignContent="center"
      justify="center"
      container
      spacing={24}
      style={Styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} style={Styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={2} />
      </Grid>
      <Grid item sm={12} style={Styles.locationRow}>
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
          styling={Styles}
        />
      </Grid>
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
