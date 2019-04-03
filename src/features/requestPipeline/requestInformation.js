import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { jsonForm } from '../dynamicForm/jsonForms/informationForm';
import DynamicFormComponent from '../dynamicForm/DynamicForm';
import BreadcrumbComponent from './breadcrumb/breadcrumb';
import styles from '../../styles/requestPipeline/requestInformation/requestInformation.module.css';
import Styles from '../../styles/requestPipeline/requestInformation/requestInformation';

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
    <Grid className={styles.grid} centered container>
      <Grid.Row className={styles.breadrow}>
        <Segment className={styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={1} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding className={styles.Grid}>
        <Segment className={styles.segment}>
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
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
requestInformation.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.func,
  setRequestInformation: PropTypes.func,
  requestInProgress: PropTypes.number,
  history: PropTypes.func,
};

requestInformation.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.func,
  setRequestInformation: PropTypes.func,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default requestInformation;
