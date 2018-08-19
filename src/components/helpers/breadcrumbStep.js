import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Icon, Label, Segment, Button } from 'semantic-ui-react';
import Styles from '../../styles/helpers/breadcrumb';

const MyButton = styled(Button)`
  &&& {
    :active {
      transform: translateY(4px);
    }
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
  <Link to={props.link} style={Styles.link}>
    <Grid.Column style={Styles.column}>
      <Segment style={Styles.iconSegment}>
        <MyButton
          style={Styles.iconButton}
          circular
          icon={
            <Icon
              circular
              size="large"
              style={returnIcon(props.current, props.selection, props.value)}
              name={returnStatus(props.selection, props.value)}
            />
          }
        />
        {(() => {
          switch (props.value) {
            case 0:
              return <div style={returnRightBar(props.selection, props.value)} />;
            case 4:
              return <div style={returnLeftBar(props.selection, props.value - 1)} />;
            default:
              return (
                <div>
                  <div style={returnLeftBar(props.selection, props.value - 1)} />
                  <div style={returnRightBar(props.selection, props.value)} />
                </div>
              );
          }
        })()}
      </Segment>
      <Segment style={Styles.segment}>
        <Label style={returnLabel(props.current, props.value)}>{props.name}</Label>
      </Segment>
    </Grid.Column>
  </Link>
);
breadcrumb.propTypes = {
  current: PropTypes.number,
  value: PropTypes.number,
  selection: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
};

breadcrumb.defaultProps = {
  current: 0,
  selection: 0,
  value: PropTypes.number,
  link: PropTypes.string,
  name: PropTypes.string,
};

export default breadcrumb;
