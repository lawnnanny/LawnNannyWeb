import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon, Label, Segment } from 'semantic-ui-react';
import Styles from '../../styles/breadcrumb';

const returnStatus = (selection, id) => {
  if (selection > id) {
    return 'check';
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
    return Styles.unfinishedIcon;
  } else if (icon === id) {
    return Styles.currentIcon;
  }
  return Styles.finishedIcon;
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
