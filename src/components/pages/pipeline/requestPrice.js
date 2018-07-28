import React from 'react';
import styled from 'styled-components';
import { Grid, Segment, Header, Icon, Input, Button, Image, Popup } from 'semantic-ui-react';
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
export const requestPrice = (props) => {
  if (props.pageInProgress < 3) {
    return <Redirect to="/pipeline/requestLocation" />;
  }
  return (
    <Grid centered container style={Styles.grid}>
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
        <Grid.Column style={Styles.priceColumn}>
          <Grid.Row style={Styles.triangleTopRow}>
            <ButtonDiv>
              <Button style={Styles.triangleTopButton} onClick={props.incrementRequestPrice}>
                <Image centered style={Styles.image} src={up} />
              </Button>
            </ButtonDiv>
          </Grid.Row>
          <Grid.Row style={Styles.priceRow}>
            <Input
              value={props.requestPrice}
              iconPosition="left"
              style={Styles.input}
              onChange={props.setRequestPrice}
            >
              <Icon name="dollar" style={Styles.inputIcon} />
              <input />
            </Input>
          </Grid.Row>
          <Grid.Row style={Styles.triangleBottomRow}>
            <ButtonDiv>
              <Button style={Styles.triangleBottomButton} onClick={props.decrementRequestPrice}>
                <Image centered style={Styles.image} src={down} />
              </Button>
            </ButtonDiv>
          </Grid.Row>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row style={Styles.buttonRow}>
        <Link to="/pipeline/requestReview">
          <ButtonDiv>
            <Button
              size="big"
              style={Styles.button}
              onClick={() => {
                props.requestInProgress(4);
              }}
            >
              Continue
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
export default requestPrice;
