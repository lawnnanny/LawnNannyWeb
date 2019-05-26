import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import styles from '../breadcrumb.module.css';
import {
  QuestionMarkIcon,
  CheckmarkIcon,
  DollarSignIcon,
  NoteIcon,
  NotePencilIcon,
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
const returnRightBar = (selection, id) => {
  if (selection > id) {
    return styles.riiiiiiightBarFinished;
  }
  return styles.riiiiiiightBarUnfinished;
};
const returnLeftBar = (selection, id) => {
  if (selection > id) {
    return styles.leeeeeeftBarFinished;
  }
  return styles.leeeeeeeftBarUnfinished;
};
const returnLabel = (current, id) => {
  if (current === id) {
    return styles.currentLabel;
  }
  return styles.label;
};
export const breadcrumb = (props) => {
  const returnStatus = (selection, id) => {
    if (selection > id) {
      return <CheckmarkIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 0) {
      return (
        <QuestionMarkIcon className={returnSvg(props.current, props.selection, props.value)} />
      );
    } else if (id === 1) {
      return <NoteIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 2) {
      return <LocationIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 3) {
      return <DollarSignIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 4) {
      return <NotePencilIcon className={returnSvg(props.current, props.selection, props.value)} />;
    }
    return <QuestionMarkIcon className={returnSvg(props.current, props.selection, props.value)} />;
  };
  return (
    <Link to={props.link} className={styles.link}>
      <Grid container className={styles.column}>
        <MyButton className={returnIcon(props.current, props.selection, props.value)}>
          {returnStatus(props.selection, props.value)}
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
