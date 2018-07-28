import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import Styles from '../../../styles/pipeline/requestReview';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import DynamicDisplayComponent from '../../helpers/DynamicDisplay';
import SubmitModalComponent from '../../helpers/reviewModal';

export const requestReview = (props) => {
  if (props.pageInProgress < 4) {
    return <Redirect to="/pipeline/requestPrice" />;
  }
  return (
    <Grid centered container style={Styles.grid}>
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={4} />
        </Segment>
      </Grid.Row>
      <Grid.Row>
        <DynamicDisplayComponent requests={props.requests} />
      </Grid.Row>
      <Grid.Row>
        <Segment style={Styles.buttonSegment}>
          <SubmitModalComponent />
        </Segment>
      </Grid.Row>
    </Grid>
  );
};
requestReview.propTypes = {
  pageInProgress: PropTypes.number,
};

requestReview.defaultProps = {
  pageInProgress: 0,
};
export default requestReview;
