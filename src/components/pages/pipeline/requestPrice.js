import React from 'react';
import styled from 'styled-components';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from '../../../styles/pipeline/requestPrice';
import BreadcrumbComponent from '../../helpers/breadcrumb';

const MyButton = styled(Button)`
  &&& {
    :active {
      background-color: #221891 !important;
      transform: translateY(4px) !important;
    }
  }
`;

export const requestPrice = (props) => {
  let buttonString = 'Continue';
  if (props.pageInProgress > 3) {
    buttonString = 'Save';
  }
  if (props.pageInProgress < 3) {
    return <Redirect to="/pipeline/requestLocation" />;
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
        <BreadcrumbComponent selection={props.pageInProgress} current={3} />
      </Grid>
      <Grid item sm={12} style={Styles.headerRow}>
        <h1 style={Styles.header}>Set A Price</h1>
      </Grid>
      <Grid item sm={12} style={Styles.priceRow}>
        <FormControl>
          <InputLabel htmlFor="component-simple">Name</InputLabel>
          <Input id="component-simple" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="component-helper">Name</InputLabel>
          <Input id="component-helper" aria-describedby="component-helper-text" />

          <FormHelperText id="component-helper-text">Some important helper text</FormHelperText>
        </FormControl>
      </Grid>
      <Grid item sm={12} style={Styles.buttonRow}>
        <Link to="/pipeline/requestReview">
          <MyButton
            size="large"
            style={Styles.button}
            onClick={() => {
              props.requestInProgress(4);
            }}
          >
            {buttonString}
          </MyButton>
        </Link>
      </Grid>
    </Grid>
  );
};
requestPrice.propTypes = {
  pageInProgress: PropTypes.number,
  requestPrice: PropTypes.number,
  setRequestPrice: PropTypes.func,
  requestInProgress: PropTypes.number,
};

requestPrice.defaultProps = {
  pageInProgress: 0,
  requestPrice: 0,
  setRequestPrice: PropTypes.func,
  requestInProgress: 0,
};
export default requestPrice;
