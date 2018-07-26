import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Icon, Label, Segment, Button } from 'semantic-ui-react';
import Styles from '../../styles/breadcrumb';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
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
const returnIcon = (current, selection, id) => {
  if (current === id) {
    return Styles.currentIcon;
  } else if (selection > id) {
    return Styles.finishedIcon;
  }
  return Styles.unfinishedIcon;
};
const returnRightBar = (selection, id) => {
  if (selection > id) {
    return Styles.rightBarFinished;
  }
  return Styles.rightBarUnfinished;
};
const returnLeftBar = (selection, id) => {
  if (selection > id) {
    return Styles.leftBarFinished;
  }
  return Styles.leftBarUnfinished;
};
const returnLabel = (current, id) => {
  if (current === id) {
    return Styles.currentLabel;
  }
  return Styles.label;
};
export const breadcrumb = props => (
  <Grid columns="equal" style={Styles.grid}>
    <Grid.Row style={Styles.row}>
      <Link to="/pipeline" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.iconSegment}>
            <ButtonDiv>
              <Button
                style={Styles.iconButton}
                circular
                icon={
                  <Icon
                    circular
                    size="large"
                    style={returnIcon(props.current, props.selection, 0)}
                    name={returnStatus(props.selection, 0)}
                  />
                }
              />
            </ButtonDiv>
            <div style={returnRightBar(props.selection, 0)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.current, 0)}>Request</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestInformation" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.iconSegment}>
            <ButtonDiv>
              <Button
                style={Styles.iconButton}
                circular
                icon={
                  <Icon
                    circular
                    size="large"
                    style={returnIcon(props.current, props.selection, 1)}
                    name={returnStatus(props.selection, 1)}
                  />
                }
              />
            </ButtonDiv>
            <div style={returnLeftBar(props.selection, 0)} />
            <div style={returnRightBar(props.selection, 1)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.current, 1)}>Details</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestLocation" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.iconSegment}>
            <ButtonDiv>
              <Button
                style={Styles.iconButton}
                circular
                icon={
                  <Icon
                    circular
                    size="large"
                    style={returnIcon(props.current, props.selection, 2)}
                    name={returnStatus(props.selection, 2)}
                  />
                }
              />
            </ButtonDiv>
            <div style={returnRightBar(props.selection, 2)} />
            <div style={returnLeftBar(props.selection, 1)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.current, 2)}>Location</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestPrice" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.iconSegment}>
            <ButtonDiv>
              <Button
                style={Styles.iconButton}
                circular
                icon={
                  <Icon
                    circular
                    size="large"
                    style={returnIcon(props.current, props.selection, 3)}
                    name={returnStatus(props.selection, 3)}
                  />
                }
              />
            </ButtonDiv>
            <div style={returnLeftBar(props.selection, 2)} />
            <div style={returnRightBar(props.selection, 3)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.current, 3)}>Price</Label>
          </Segment>
        </Grid.Column>
      </Link>
      <Link to="/pipeline/requestReview" style={Styles.link}>
        <Grid.Column style={Styles.column}>
          <Segment style={Styles.iconSegment}>
            <ButtonDiv>
              <Button
                style={Styles.iconButton}
                circular
                icon={
                  <Icon
                    circular
                    size="large"
                    style={returnIcon(props.current, props.selection, 4)}
                    name={returnStatus(props.selection, 4)}
                  />
                }
              />
            </ButtonDiv>
            <div style={returnLeftBar(props.selection, 3)} />
          </Segment>
          <Segment style={Styles.segment}>
            <Label style={returnLabel(props.current, 4)}>Review</Label>
          </Segment>
        </Grid.Column>
      </Link>
    </Grid.Row>
  </Grid>
);
breadcrumb.propTypes = {
  current: PropTypes.number,
  selection: PropTypes.number,
};

breadcrumb.defaultProps = {
  current: 0,
  selection: 0,
};

export default breadcrumb;
