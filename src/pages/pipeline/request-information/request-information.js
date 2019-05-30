import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import BreadcrumbComponent from '../../../components/breadcrumb';
import styles from './request-information.module.css';

const RequestInformation = (props) => {
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
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={1} />
      </Grid>
      <Grid item sm={12} className={styles.formRow}>
        {'insert form here'}
      </Grid>
    </Grid>
  );
};
RequestInformation.propTypes = {
  pageInProgress: PropTypes.number,
};

RequestInformation.defaultProps = {
  pageInProgress: 0,
  requestInProgress: 0,
  history: PropTypes.func,
};
export default RequestInformation;
