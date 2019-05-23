import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import styles from './request-option.module.css';
import RightArrowIcon from '../../../../components/icons/right-arrow';

export const RequestOption = props => (
  <Link to="/pipeline/requestInformation" className={styles.link}>
    <Button fluid className={styles.button} onClick={() => props.onClick()}>
      <Avatar alt="Image not Found" src={props.imageURL} className={styles.icon} />
      <h2 className={styles.header}>{props.title}</h2>
      <RightArrowIcon styling={styles.arrow} />
    </Button>
  </Link>
);

RequestOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RequestOption;
