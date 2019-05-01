import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
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
        <TextField
          id="outlined-adornment-amount"
          variant="outlined"
          label="Amount"
          value={props.requestPrice}
          style={Styles.inputPrice}
          onChange={props.setRequestPrice}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
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
