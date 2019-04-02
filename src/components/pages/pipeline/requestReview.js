import React, { Component } from 'react';
import { Grid, Segment, Button, Modal, Divider, Message } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from '../../../styles/pipeline/requestReview.module.css';
import Styles from '../../../styles/pipeline/requestReview';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import DynamicDisplayComponent from '../../helpers/DynamicDisplay';
import LoginModal from '../../../connectedComponents/helpers/ConnectedLoginModal';
import SignupModal from '../../../connectedComponents/helpers/ConnectedSignupModal';
import handleRequest from '../../../networkRequests/requests';

const MyButton = styled(Button)`
  &&& {
    :active {
      background-color: #197307 !important;
      transform: translateY(4px) !important;
    }
  }
`;

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
      <Grid centered container className={styles.grid}>
        <Grid.Row className={styles.breadrow}>
          <Segment className={styles.segment}>
            <BreadcrumbComponent selection={this.props.pageInProgress} current={4} />
          </Segment>
        </Grid.Row>
        {this.state.dataBaseError && (
          <Grid.Row>
            <Message size="big" negative className={styles.message}>
              <Message.Header>Error while trying to submit request</Message.Header>
              <p>{this.state.dataBaseError}</p>
            </Message>
          </Grid.Row>
        )}
        <Grid.Row>
          <DynamicDisplayComponent requests={this.props.requests} />
        </Grid.Row>
        <Grid.Row className={styles.submitRow}>
          <Segment className={styles.buttonSegment}>
            <MyButton
              onClick={() => this.handleOpen(this.props.isLoggedIn)}
              size="big"
              floated="right"
              className={styles.modalButton}
            >
              Submit Request
            </MyButton>

            <Modal
              open={this.state.open}
              onClose={this.handleClose}
              className={styles.modal}
              size="small"
              closeIcon
            >
              <Modal.Header className={styles.header}>To Make A Request Please...</Modal.Header>
              <Modal.Content className={styles.content}>
                <Segment className={styles.segment}>
                  <SignupModal
                    size="big"
                    fluid
                    signupButton={Styles.signupButton}
                    history={this.props.history}
                    destination="/pipeline/requestReview"
                    requestInProgress={this.props.requestInProgress}
                  />
                  <Divider horizontal className={styles.divider}>
                    Or
                  </Divider>
                  <LoginModal
                    size="big"
                    fluid
                    loginButton={Styles.loginButton}
                    history={this.props.history}
                    destination="/pipeline/requestReview"
                    requestInProgress={this.props.requestInProgress}
                  />
                </Segment>
              </Modal.Content>
            </Modal>
          </Segment>
        </Grid.Row>
      </Grid>
    );
  }
}

requestReview.propTypes = {
  pageInProgress: PropTypes.number,
  requests: PropTypes.func,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};

requestReview.defaultProps = {
  pageInProgress: 0,
  requests: PropTypes.func,
  requestInProgress: PropTypes.func,
  history: PropTypes.func,
  isLoggedIn: PropTypes.bool,
};
export default requestReview;
