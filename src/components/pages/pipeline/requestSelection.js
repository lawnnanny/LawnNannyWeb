import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import RequestOptionComponent from '../../helpers/RequestOption';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/pipeline/requestSelection';
import mower from '../../../images/pipeline/mower.png';
import rake from '../../../images/pipeline/rake.png';
import snowBlower from '../../../images/pipeline/snowBlower.png';
import custom from '../../../images/pipeline/custom.png';

export const requestSelection = props => (
  <Grid
    md={9}
    lg={8}
    xl={7}
    alignItems="center"
    alignContent="center"
    justify="center"
    style={Styles.grid}
    verticalAlign="middle"
  >
    <Grid item style={Styles.pipelineSegment}>
      <BreadcrumbComponent selection={props.pageInProgress} current={0} />
    </Grid>
    <Grid item style={Styles.headerSegment}>
      <h1 style={Styles.header}>Choose Your Service</h1>
      <h3 style={Styles.subHeader}>Choose a Service for someone to perform</h3>
    </Grid>
    <Grid item style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={mower}
        title="Lawn Mowing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Lawn Mowing');
        }}
      />
    </Grid>
    <Grid item style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={rake}
        title="Yard Work"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Yard Work');
        }}
      />
    </Grid>
    <Grid item style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={snowBlower}
        title="Snow Clearing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Snow Clearing');
        }}
      />
    </Grid>
    <Grid item style={Styles.buttonSegment}>
      <RequestOptionComponent
        style={Styles.buttonComponent}
        imageURL={custom}
        title="Custom Request"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Custom Request');
        }}
      />
    </Grid>
  </Grid>
);

requestSelection.propTypes = {
  pageInProgress: PropTypes.number,
  setTypeOfRequest: PropTypes.func,
  requestInProgress: PropTypes.number,
};

requestSelection.defaultProps = {
  pageInProgress: 0,
  setTypeOfRequest: PropTypes.func,
  requestInProgress: 0,
};

export default requestSelection;
