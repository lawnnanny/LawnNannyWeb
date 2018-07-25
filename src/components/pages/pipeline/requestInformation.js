import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { jsonForm } from './jsonForms/informationForm';
import DynamicFormComponent from '../../helpers/DynamicForm';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/requestInformation';

export const requestInformation = (props) => {
  if (props.pageInProgress < 1) {
    return <Redirect to="/pipeline" />;
  }
  return (
    <Grid container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={1} />
        </Segment>
      </Grid.Row>
      <Grid.Row padding style={Styles.Grid}>
        <Segment style={Styles.segment}>
          <DynamicFormComponent
            popup
            jsonForm={() => jsonForm}
            reduxInfo={props.requests.requestInformation}
            setRequest={props.setRequestInformation}
            form={props.requests.selection}
            route={() => {
              props.requestInProgress(2);
              props.history.push('/pipeline/requestLocation');
            }}
          />
        </Segment>
      </Grid.Row>
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
