import React from 'react';
import styled from 'styled-components';
import { Grid, Segment, Header, Icon, Input, Button, Popup, Label } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../../../styles/pipeline/requestPrice.module.css';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Clicker from '../../helpers/Clicker';

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
    <Grid centered container className={styles.grid} verticalAlign="middle">
      <Grid.Row className={styles.breadrow}>
        <Segment className={styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={3} />
        </Segment>
      </Grid.Row>
      <Grid.Row className={styles.headerRow}>
        <Header as="h1" className={styles.header}>
          Set A Price{' '}
          <Popup
            size="large"
            trigger={<Icon name="question" className={styles.popupIcon} circular />}
            content="Please specify what you would like the price of the request to be set at. You can change this later on."
            on={['hover', 'click']}
          />
        </Header>
      </Grid.Row>
      <Grid.Row className={styles.priceRow}>
        <Input
          labelPosition="right"
          value={props.requestPrice}
          iconPosition="left"
          className={styles.input}
          onChange={props.setRequestPrice}
        >
          <Icon name="dollar" className={styles.inputIcon} />
          <input />
          <Label className={styles.label}>
            <Clicker
              incrementRequestPrice={props.incrementRequestPrice}
              decrementRequestPrice={props.decrementRequestPrice}
            />
          </Label>
        </Input>
      </Grid.Row>
      <Grid.Row className={styles.buttonRow}>
        <Link to="/pipeline/requestReview">
          <MyButton
            size="huge"
            className={styles.button}
            onClick={() => {
              props.requestInProgress(4);
            }}
          >
            {buttonString}
          </MyButton>
        </Link>
      </Grid.Row>
    </Grid>
  );
};
requestPrice.propTypes = {
  pageInProgress: PropTypes.number,
  requestPrice: PropTypes.number,
  setRequestPrice: PropTypes.func,
  requestInProgress: PropTypes.number,
  incrementRequestPrice: PropTypes.func,
  decrementRequestPrice: PropTypes.func,
};

requestPrice.defaultProps = {
  pageInProgress: 0,
  requestPrice: 0,
  setRequestPrice: PropTypes.func,
  requestInProgress: 0,
  incrementRequestPrice: PropTypes.func,
  decrementRequestPrice: PropTypes.func,
};
export default requestPrice;
