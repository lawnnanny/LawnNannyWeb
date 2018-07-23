import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Grid, Icon, Label, Segment } from 'semantic-ui-react';
import Styles from '../../styles/breadcrumb';

const returnStatus = (selection, id) => {
  if (selection > id) {
    return 'check';
  } else if (id === 0) {
    return 'map signs';
  } else if (id === 1) {
    return 'wpforms';
  } else if (id === 2) {
    return 'location arrow';
  } else if (id === 3) {
    return 'dollar';
  } else if (id === 4) {
    return 'pencil';
  }
  return 'cancel';
};
const returnIcon = (icon, id, isComplete) => {
  if (isComplete) {
    return Styles.finishedIcon;
  } else if (icon === id) {
    return Styles.currentIcon;
  }
  return Styles.unfinishedIcon;
};
const returnRightBar = (isComplete) => {
  if (isComplete) {
    return Styles.rightBarFinished;
  }
  return Styles.rightBarUnfinished;
};
const returnLeftBar = (isComplete) => {
  if (isComplete) {
    return Styles.leftBarFinished;
  }
  return Styles.leftBarUnfinished;
};
const returnLabel = (label, id) => {
  if (label === id) {
    return Styles.currentLabel;
  }
  return Styles.label;
};
export const breadcrumb = props => (
  <Grid columns="equal" style={Styles.grid}>
    <Grid.Row style={Styles.row}>
      <Link to="/pipeline" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.segment}>
            <div style={returnRightBar(props.requestComplete)} />
            <Icon
              style={returnIcon(props.selection, 0, props.requestComplete)}
              circular
              size="large"
              name={returnStatus(props.selection, 0)}
            />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.selection, 0)}>Request</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestInformation" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.segment}>
            <Icon
              circular
              size="large"
              style={returnIcon(props.selection, 1, props.infoComplete)}
              name={returnStatus(props.selection, 1)}
            />
            <div style={returnLeftBar(props.requestComplete)} />
            <div style={returnRightBar(props.infoComplete)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.selection, 1)}>Details</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestLocation" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.segment}>
            <div style={returnRightBar(props.locationComplete)} />
            <Icon
              circular
              size="large"
              style={returnIcon(props.selection, 2, props.locationComplete)}
              name={returnStatus(props.selection, 2)}
            />
            <div style={returnLeftBar(props.infoComplete)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.selection, 2)}>Location</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestPrice" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.segment}>
            <Icon
              circular
              size="large"
              style={returnIcon(props.selection, 3, props.priceComplete)}
              name={returnStatus(props.selection, 3)}
            />
            <div style={returnLeftBar(props.locationComplete)} />
            <div style={returnRightBar(props.priceComplete)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.selection, 3)}>Price</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestReview" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.segment}>
            <Icon
              circular
              size="large"
              style={returnIcon(props.selection, 4, props.reviewComplete)}
              name={returnStatus(props.selection, 4)}
            />
            <div style={returnLeftBar(props.priceComplete)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.selection, 4)}>Review</Label>
          </Segment>
        </Grid.Column>
      </Link>
    </Grid.Row>
  </Grid>
);
breadcrumb.propTypes = {
  selection: PropTypes.number.isRequired,
  requestComplete: PropTypes.number.isRequired,
  priceComplete: PropTypes.number.isRequired,
  locationComplete: PropTypes.number.isRequired,
  infoComplete: PropTypes.number.isRequired,
  reviewComplete: PropTypes.number.isRequired,
};

export default breadcrumb;
