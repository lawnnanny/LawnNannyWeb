import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, Segment, Header } from 'semantic-ui-react';
import styles from '../../styles/homepage/Homepage.module.css';

const HomePage = props => (
  <Grid stackable centered className={styles.grid}>
    <Grid.Row verticalAlign="middle" className={styles.headingRow}>
      <Segment vertical className={styles.headerSegment}>
        <Header className={styles.header}>Lawn Nanny</Header>
        <div className={styles.div}>
          <Button
            className={styles.requestButton}
            size="large"
            onClick={() => props.history.push('/pipeline')}
          >
            Create a Request
          </Button>
        </div>
      </Segment>
    </Grid.Row>
  </Grid>
);

HomePage.propTypes = {
  history: PropTypes.func,
};

HomePage.defaultProps = {
  history: PropTypes.func,
};
export default HomePage;
