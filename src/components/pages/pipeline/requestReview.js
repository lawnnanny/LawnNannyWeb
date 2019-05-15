import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { Redirect, withRouter } from 'react-router';
import PropTypes from 'prop-types';
import Styles from '../../../styles/pipeline/requestReview';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import ReviewModal from '../../helpers/reviewModal';

import handleRequest from '../../../networkRequests/requests';

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
    } else {
      const networkResponsePromise = handleRequest({
        address: this.props.requests.requestLocation.streetAddress.entry,
        city: this.props.requests.requestLocation.city.entry,
        zip: this.props.requests.requestLocation.zipcode.entry,
        state: this.props.requests.requestLocation.state.entry,
        country: 'USA',
        price: this.props.requests.requestPrice,
        serviceRequest: this.props.requests.requestInformation,
      });
      networkResponsePromise.then((serverResponse) => {
        if (serverResponse.success) {
          this.props.requestInProgress(5);
          this.props.history.push('/pipeline/requestComplete');
        } else {
          const currentState = this.state;
          currentState.dataBaseError = serverResponse.message;
          this.setState(currentState);
        }
      });
    }
  };
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
        style={Styles.grid}
        verticalAlign="middle"
      >
        <Grid item sm={12} style={Styles.breadRow}>
          <BreadcrumbComponent selection={this.props.pageInProgress} current={4} />
        </Grid>
        {this.state.dataBaseError && (
          <Grid item sm={12}>
            <SnackbarContent style={Styles.message} message="Error while trying to submit request">
              <p>{this.state.dataBaseError}</p>
            </SnackbarContent>
          </Grid>
        )}
        <Grid item sm={12} style={Styles.formRow}>
          <div />
        </Grid>
        <Grid item sm={12} style={Styles.submitRow}>
          <ReviewModalWithRouter />
        </Grid>
      </Grid>
    );
  }
}

const ReviewModalWithRouter = withRouter(ReviewModal);

requestReview.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.obj,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
};

requestReview.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.obj,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};
export default requestReview;
