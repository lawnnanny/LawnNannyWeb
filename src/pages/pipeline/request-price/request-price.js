import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './request-price.module.css';
import BreadcrumbComponent from '../../../components/breadcrumb';
import { QuestionMarkIcon, DollarSignIcon } from '../../../components/icons';

const MyButton = styled(Button)`
  &&& {
    :active {
      background-color: #221891 !important;
      transform: translateY(4px) !important;
    }
  }
`;

const styling = () => ({
  lightTooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 11,
  },
});

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
      className={styles.grid}
      verticalAlign="middle"
    >
      <Grid item sm={12} className={styles.breadRow}>
        <BreadcrumbComponent selection={props.pageInProgress} current={3} />
      </Grid>
      <Grid item sm={12} className={styles.headerRow}>
        <Tooltip
          disableFocusListener
          className={styles.tooltipDiv}
          classes={{ Tooltip: styles.lightTooltip }}
          title={<h1 className={styles.tooltipText}>Please set a price that you would like.</h1>}
          placement="right-start"
        >
          <Badge
            badgeContent={<QuestionMarkIcon styling={styles.tooltipIcon} />}
            className={styles.tooltip}
          >
            <h1 className={styles.header}>Set A Price</h1>
          </Badge>
        </Tooltip>
      </Grid>
      <Grid item sm={12} className={styles.priceRow}>
        <FormControl>
          <Input
            value={props.requestPrice}
            className={styles.input}
            onChange={props.setRequestPrice}
            startAdornment={
              <InputAdornment position="start">
                <DollarSignIcon styling={styles.priceIcon} />
              </InputAdornment>
            }
          />
        </FormControl>
      </Grid>
      <Grid item sm={12} className={styles.buttonRow}>
        <Link to="/pipeline/requestReview">
          <MyButton
            size="large"
            className={styles.button}
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
export default withStyles(styling)(requestPrice);
