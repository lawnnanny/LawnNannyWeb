import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment } from 'semantic-ui-react';
import RequestOptionComponent from '../../helpers/RequestOption';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import styles from '../../../styles/pipeline/requestSelection.module.css';
import mower from '../../../images/pipeline/mower.png';
import rake from '../../../images/pipeline/rake.png';
import snowBlower from '../../../images/pipeline/snowBlower.png';
import custom from '../../../images/pipeline/custom.png';

export const requestSelection = props => (
  <Grid container className={styles.grid} verticalAlign="middle">
    <Grid.Row className={styles.breadrow}>
      <Segment className={styles.segment}>
        <BreadcrumbComponent selection={props.pageInProgress} current={0} />
      </Segment>
    </Grid.Row>
    <Segment className={styles.segment}>
      <Header as="h2">
        Choose Your Service
        <Header.Subheader>Choose a Service for someone to perform</Header.Subheader>
      </Header>
    </Segment>
    <Segment className={styles.buttonSegment}>
      <RequestOptionComponent
        className={styles.buttonComponent}
        imageURL={mower}
        title="Lawn Mowing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Lawn Mowing');
        }}
      />
    </Segment>
    <Segment className={styles.buttonSegment}>
      <RequestOptionComponent
        className={styles.buttonComponent}
        imageURL={rake}
        title="Yard Work"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Yard Work');
        }}
      />
    </Segment>
    <Segment className={styles.buttonSegment}>
      <RequestOptionComponent
        className={styles.buttonComponent}
        imageURL={snowBlower}
        title="Snow Clearing"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Snow Clearing');
        }}
      />
    </Segment>
    <Segment className={styles.buttonSegment}>
      <RequestOptionComponent
        className={styles.buttonComponent}
        imageURL={custom}
        title="Custom Request"
        onClick={() => {
          props.requestInProgress(1);
          props.setTypeOfRequest('Custom Request');
        }}
      />
    </Segment>
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
