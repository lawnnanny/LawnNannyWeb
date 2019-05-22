import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from './request-complete.module.css';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;

class requestComplete extends Component {
  constructor() {
    super();
    this.state = {
      dataBaseError: null,
    };
  }

  render() {
    if (this.props.pageInProgress < 5) {
      return <Redirect to="/pipeline/requestReview" />;
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
        <Grid item sm={12} className={styles.headerRow}>
          <h1 className={styles.header}>Request Submitted!</h1>
        </Grid>
        <Grid item sm={12} className={styles.buttonRow}>
          <ButtonDiv>
            <Button
              size="large"
              className={styles.button}
              onClick={() => {
                this.props.history.push('/HomePage');
              }}
            >
              Continue
            </Button>
          </ButtonDiv>
        </Grid>
      </Grid>
    );
  }
}

requestComplete.propTypes = {
  pageInProgress: PropTypes.number,
  history: PropTypes.func,
};

requestComplete.defaultProps = {
  pageInProgress: 0,
  history: PropTypes.func,
};
export default requestComplete;