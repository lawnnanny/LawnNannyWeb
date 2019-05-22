import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from '../../../styles/pipeline/requestReview.module.css';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import ReviewModal from '../../helpers/reviewModal';

function requestReview(props) {
  if (props.pageInProgress < 4) {
    return <Redirect to="/pipeline/requestPrice" />;
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
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={4} />
      </Grid>
      <Grid item sm={12} className={styles.formRow}>
        <div />
      </Grid>
      <Grid item sm={12} className={styles.submitRow}>
        <ReviewModalWithRouter />
      </Grid>
    </Grid>
  );
}

const ReviewModalWithRouter = withRouter(ReviewModal);

requestReview.propTypes = {
  pageInProgress: PropTypes.number,
};

requestReview.defaultProps = {
  pageInProgress: 0,
  isLoggedIn: PropTypes.bool,
};
export default requestReview;
