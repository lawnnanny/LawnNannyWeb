import React, { Component } from 'react';
import { Grid, Icon, Header, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import styles from '../../styles/requestPipeline/requestComplete/requestComplete.module.css';

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
      <Grid centered container className={styles.grid}>
        <Grid.Row className={styles.completedRow}>
          <Header icon textAlign="center">
            <Icon className={styles.icon} name="checkmark" />
            <Header.Content className={styles.header}>Request Submitted</Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row className={styles.buttonRow}>
          <ButtonDiv>
            <Button
              className={styles.button}
              onClick={() => {
                this.props.history.push('/HomePage');
              }}
            >
              Continue{' '}
            </Button>
          </ButtonDiv>
        </Grid.Row>
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
