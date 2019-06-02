import React from 'react';
import PropTypes from 'prop-types';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

export const ArrowForward = props => <ArrowForwardIcon className={props.styling} />;
ArrowForward.propTypes = {
  styling: PropTypes.func,
};

ArrowForward.defaultProps = {
  styling: PropTypes.func,
};
export default ArrowForward;
