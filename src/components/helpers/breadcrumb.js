import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Label, Segment } from 'semantic-ui-react';
import Styles from '../../styles/breadcrumb';

const returnStatus = (selection, id) => {
  if (selection > id) {
    return 'check';
  } else if (selection === id) {
    return 'question';
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
const returnIcon = (icon, id) => {
  if (icon > id) {
    return Styles.finishedIcon;
  } else if (icon === id) {
    return Styles.currentIcon;
  }
  return Styles.unfinishedIcon;
};
const returnRightBar = (bar, id) => {
  if (bar > id) {
    return Styles.rightBarFinished;
  }
  return Styles.rightBarUnfinished;
};
const returnLeftBar = (bar, id) => {
  if (bar > id) {
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
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            style={returnIcon(props.selection, 0)}
            circular
            size="large"
            name={returnStatus(props.selection, 0)}
          />
          <div style={returnRightBar(props.selection, 0)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={returnLabel(props.selection, 0)}>Request</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.selection, 1)}
            name={returnStatus(props.selection, 1)}
          />
          <div style={returnLeftBar(props.selection, 0)} />
          <div style={returnRightBar(props.selection, 1)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={returnLabel(props.selection, 1)}>Details</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.selection, 2)}
            name={returnStatus(props.selection, 2)}
          />
          <div style={returnLeftBar(props.selection, 1)} />
          <div style={returnRightBar(props.selection, 2)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={returnLabel(props.selection, 2)}>Location</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.selection, 3)}
            name={returnStatus(props.selection, 3)}
          />
          <div style={returnLeftBar(props.selection, 2)} />
          <div style={returnRightBar(props.selection, 3)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={returnLabel(props.selection, 3)}>Price</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.selection, 4)}
            name={returnStatus(props.selection, 4)}
          />
          <div style={returnLeftBar(props.selection, 3)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={returnLabel(props.selection, 4)}>Review</Label>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

breadcrumb.propTypes = {
  selection: PropTypes.number.isRequired,
};

export default breadcrumb;
