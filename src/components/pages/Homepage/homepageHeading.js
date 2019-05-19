import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Styles from '../../../styles/Homepage/homepageHeading';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;

const HomePageHeading = props => (
  <Grid container sm={12} spacing={24} style={Styles.homepageHeadingContainer}>
    <Grid container sm={12} spacing={24} style={Styles.headingShadowContainer}>
      <Grid item sm={12} style={Styles.headingHeader}>
        <h1 style={Styles.header}>Lawn Nanny</h1>
      </Grid>
      <Grid item sm={12} style={Styles.buttonContainer}>
        <ButtonDiv style={Styles.buttonDiv}>
          <Button style={Styles.requestButton} onClick={() => props.history.push('/pipeline')}>
            Make a Request
          </Button>
        </ButtonDiv>
      </Grid>
    </Grid>
  </Grid>
);

HomePageHeading.contextTypes = {
  history: PropTypes.func,
};
HomePageHeading.propTypes = {
  history: PropTypes.func,
};

HomePageHeading.defaultProps = {
  history: PropTypes.func,
};
export default HomePageHeading;
