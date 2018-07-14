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
    return 'edit outline';
  }
  return 'cancel';
};
const returnColor = (iconColor, id) => {
  if (iconColor > id) {
    return 'green';
  } else if (iconColor === id) {
    return 'blue';
  }
  return 'grey';
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
export const breadcrumb = props => (
  <Grid columns="equal" style={Styles.grid}>
    <Grid.Row style={Styles.row}>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            style={returnIcon(props.icon, 0)}
            circular
            size="large"
            color={returnColor(props.iconColor, 0)}
            name={returnStatus(props.selection, 0)}
          />
          <div style={returnRightBar(props.bar, 0)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Request</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.icon, 1)}
            color={returnColor(props.iconColor, 1)}
            name={returnStatus(props.selection, 1)}
          />
          <div style={returnLeftBar(props.bar, 0)} />
          <div style={returnRightBar(props.bar, 1)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Details</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.icon, 2)}
            color={returnColor(props.iconColor, 2)}
            name={returnStatus(props.selection, 2)}
          />
          <div style={returnLeftBar(props.bar, 1)} />
          <div style={returnRightBar(props.bar, 2)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Location</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.icon, 3)}
            color={returnColor(props.iconColor, 3)}
            name={returnStatus(props.selection, 3)}
          />
          <div style={returnLeftBar(props.bar, 2)} />
          <div style={returnRightBar(props.bar, 3)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Price</Label>
        </Segment>
      </Grid.Column>
      <Grid.Column style={Styles.column}>
        <Segment style={Styles.segment}>
          <Icon
            circular
            size="large"
            style={returnIcon(props.icon, 4)}
            color={returnColor(props.iconColor, 4)}
            name={returnStatus(props.selection, 4)}
          />
          <div style={returnLeftBar(props.bar, 3)} />
        </Segment>
        <Segment style={Styles.segment}>
          <Label style={Styles.label}>Review</Label>
        </Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

breadcrumb.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default breadcrumb;
