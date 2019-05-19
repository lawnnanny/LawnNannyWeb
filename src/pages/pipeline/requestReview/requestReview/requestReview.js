import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Redirect, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './requestReview.module.css';
import BreadcrumbComponent from '../../../../components/breadcrumb/breadcrumb';
import ReviewModal from '../reviewModal';

class requestReview extends Component {
  constructor() {
    super();
    this.state = {
      dataBaseError: null,
      open: false,
    };
  }
  handleOpen = (loggedIn) => {
    if (!loggedIn) {
      this.setState({ open: true });
    }
  }

  handleClose = () => this.setState({ open: false });
  render() {
    if (this.props.pageInProgress < 4) {
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
          <BreadcrumbComponent selection={this.props.pageInProgress} current={4} />
        </Grid>
        {this.state.dataBaseError && (
          <Grid item sm={12}>
            <SnackbarContent className={styles.message} message="Error while trying to submit request">
              <p>{this.state.dataBaseError}</p>
            </SnackbarContent>
          </Grid>
        )}
        <Grid item sm={12} className={styles.formRow}>
          <div />
        </Grid>
        <Grid item sm={12} className={styles.submitRow}>
          <ReviewModalWithRouter />
        </Grid>
      </Grid>
    );
  }
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
