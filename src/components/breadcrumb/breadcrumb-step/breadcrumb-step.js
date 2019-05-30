import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import styles from '../breadcrumb.module.css';
import {
  CreateIcon,
  CheckmarkIcon,
  DollarIcon,
  EventNoteIcon,
  AssignmentIcon,
  LocationIcon,
} from '../../icons';

const MyButton = styled(Fab)`
  &&& {
    :active {
      transform: translateY(4px);
    }
  }
`;

const returnIcon = (current, selection, id) => {
  if (current === id) {
    return styles.currentIcon;
  } else if (selection > id) {
    return styles.finishedIcon;
  }
  return styles.unfinishedIcon;
};
const returnSvg = (current, selection, id) => {
  if (current === id) {
    return styles.currentSvg;
  } else if (selection > id) {
    return styles.finishedSvg;
  }
  return styles.unfinishedSvg;
};
const returnLabel = (current, id) => {
  if (current === id) {
    return styles.currentLabel;
  }
  return styles.label;
};

export const breadcrumb = (props) => {
  const Icon = () => {
    if (props.selection > props.value) {
      return <CheckmarkIcon className={returnSvg(props.current, props.selection, props.value)} />;
    }
    switch (props.value) {
      case 0:
        return <CreateIcon className={returnSvg(props.current, props.selection, props.value)} />;
      case 1:
        return <EventNoteIcon className={returnSvg(props.current, props.selection, props.value)} />;
      case 2:
        return <LocationIcon className={returnSvg(props.current, props.selection, props.value)} />;
      case 3:
        return <DollarIcon className={returnSvg(props.current, props.selection, props.value)} />;
      case 4:
        return (
          <AssignmentIcon className={returnSvg(props.current, props.selection, props.value)} />
        );
      default:
        return <CreateIcon className={returnSvg(props.current, props.selection, props.value)} />;
    }
  };
  return (
    <Link to={props.link} className={styles.link}>
      <Grid container className={styles.column}>
        <MyButton className={returnIcon(props.current, props.selection, props.value)}>
          <Icon />
        </MyButton>
        <h2 className={returnLabel(props.current, props.value)}>{props.name}</h2>
      </Grid>
    </Link>
  );
};
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
