import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import RequestInformationForm from './jsonForms/RequestInformationForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/pipeline/requestInformation';

const requestInformation = (props) => {
  let destinationString = '/pipeline/requestLocation';
  if (props.pageInProgress > 1) {
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
        <RequestInformationForm
          route={() => {
            props.requestInProgress(2);
            props.history.push(destinationString);
          }}
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
