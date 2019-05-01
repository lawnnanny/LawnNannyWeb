import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { jsonForm } from './jsonForms/informationForm';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/pipeline/requestInformation';

export const requestInformation = (props) => {
  let destinationString = '/pipeline/requestLocation';
  if (props.pageInProgress > 1) {
    jsonForm[props.requests.selection].button = 'Save';
    destinationString = '/pipeline/requestReview';
  }
  if (props.pageInProgress < 1) {
    return <Redirect to="/pipeline" />;
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
        <BreadcrumbComponent selection={props.pageInProgress} current={1} />
      </Grid>
      <Grid item sm={12} style={Styles.formRow}>
        <DynamicFormComponent
          popup
          jsonForm={() => jsonForm}
          reduxInfo={props.requests.requestInformation}
          setRequest={props.setRequestInformation}
          form={props.requests.selection}
          route={() => {
            props.requestInProgress(2);
            props.history.push(destinationString);
          }}
          styling={Styles}
        />
      </Grid>
    </Grid>
  );
};
requestInformation.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.obj,
  setRequestInformation: PropTypes.func,
  requestInProgress: PropTypes.number,
  history: PropTypes.func,
};

requestInformation.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.obj,
  setRequestInformation: PropTypes.func,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default requestInformation;
