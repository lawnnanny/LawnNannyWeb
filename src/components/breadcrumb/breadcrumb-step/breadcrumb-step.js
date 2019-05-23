import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import styles from '../breadcrumb.module.css';
import QuestionMarkIcon from '../../icons/question-mark';
import CheckmarkIcon from '../../icons/checkmark';
import DollarSignIcon from '../../icons/dollar-sign';
import NotesIcon from '../../icons/notes';
import Notes2Icon from '../../icons/notes-2';
import LocationIcon from '../../icons/location';

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
      return <NotesIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 2) {
      return <LocationIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 3) {
      return <DollarSignIcon className={returnSvg(props.current, props.selection, props.value)} />;
    } else if (id === 4) {
      return <Notes2Icon className={returnSvg(props.current, props.selection, props.value)} />;
    }
    return <QuestionMarkIcon className={returnSvg(props.current, props.selection, props.value)} />;
  };
  return (
    <Link to={props.link} className={styles.link}>
      <Grid container className={styles.column}>
        <MyButton className={returnIcon(props.current, props.selection, props.value)}>
          {returnStatus(props.selection, props.value)}
        </MyButton>
        {(() => {
          switch (props.value) {
            case 0:
              return <div className={returnRightBar(props.selection, props.value)} />;
            case 4:
              return <div className={returnLeftBar(props.selection, props.value - 1)} />;
            default:
              return (
                <div>
                  <div className={returnLeftBar(props.selection, props.value - 1)} />
                  <div className={returnRightBar(props.selection, props.value)} />
                </div>
              );
          }
        })()}

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
