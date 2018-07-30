import React from 'react';
import styled from 'styled-components';
import { Grid, Segment, Header, Icon, Input, Button, Image, Popup, Label } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Styles from '../../../styles/pipeline/requestPrice';
import up from '../../../images/pipeline/up.png';
import down from '../../../images/pipeline/down.png';
import BreadcrumbComponent from '../../helpers/breadcrumb';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
const Clickers = props => (
  <div>
    <ButtonDiv>
      <Button style={Styles.triangleTopButton} onClick={props.incrementRequestPrice}>
        <Image centered style={Styles.image} src={up} />
      </Button>
    </ButtonDiv>
    <ButtonDiv>
      <Button style={Styles.triangleBottomButton} onClick={props.decrementRequestPrice}>
        <Image centered style={Styles.image} src={down} />
      </Button>
    </ButtonDiv>
  </div>
);
export const requestPrice = (props) => {
  let buttonString = 'Continue';
  if (props.pageInProgress > 3) {
    buttonString = 'Save';
  }
  if (props.pageInProgress < 3) {
    return <Redirect to="/pipeline/requestLocation" />;
  }
  return (
    <Grid centered container style={Styles.grid} verticalAlign="middle">
      <Grid.Row style={Styles.breadrow}>
        <Segment style={Styles.segment}>
          <BreadcrumbComponent selection={props.pageInProgress} current={3} />
        </Segment>
      </Grid.Row>
      <Grid.Row style={Styles.headerRow}>
        <Header as="h1" style={Styles.header}>
          Set A Price{' '}
          <Popup
            size="large"
            trigger={<Icon name="question" style={Styles.popupIcon} circular />}
            content="Please specify what you would like the price of the request to be set at. You can change this later on."
            on={['hover', 'click']}
          />
        </Header>
      </Grid.Row>
      <Grid.Row style={Styles.priceRow}>
        <Input
          labelPosition="right"
          value={props.requestPrice}
          iconPosition="left"
          style={Styles.input}
          onChange={props.setRequestPrice}
        >
          <Icon name="dollar" style={Styles.inputIcon} />
          <input />
          <Label style={Styles.label}>
            <Clickers
              incrementRequestPrice={props.incrementRequestPrice}
              decrementRequestPrice={props.decrementRequestPrice}
            />
          </Label>
        </Input>
      </Grid.Row>
      <Grid.Row style={Styles.buttonRow}>
        <Link to="/pipeline/requestReview">
          <ButtonDiv>
            <Button
              size="huge"
              style={Styles.button}
              onClick={() => {
                props.requestInProgress(4);
              }}
            >
              {buttonString}
            </Button>
          </ButtonDiv>
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
Clickers.propTypes = {
  incrementRequestPrice: PropTypes.func,
  decrementRequestPrice: PropTypes.func,
};

Clickers.defaultProps = {
  incrementRequestPrice: PropTypes.func,
  decrementRequestPrice: PropTypes.func,
};
export default requestPrice;
