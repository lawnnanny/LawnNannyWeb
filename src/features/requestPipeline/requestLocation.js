import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { jsonForm } from '../dynamicForm/jsonForms/locationForm';
import styles from '../../styles/requestPipeline/requestLocation/requestLocation.module.css';
import Styles from '../../styles/requestPipeline/requestLocation/requestLocation';
import DynamicFormComponent from '../dynamicForm/DynamicForm';
import BreadcrumbComponent from './breadcrumb/breadcrumb';

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
    <Grid container className={styles.grid}>
      <Grid.Row className={styles.breadrow}>
        <Segment className={styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={2} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding className={styles.Grid}>
        <Segment className={styles.segment}>
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
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
requestLocation.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.func,
  setRequestLocation: PropTypes.func,
  requestInProgress: PropTypes.number,
  history: PropTypes.func,
};

requestLocation.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.func,
  setRequestLocation: PropTypes.func,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default requestLocation;
