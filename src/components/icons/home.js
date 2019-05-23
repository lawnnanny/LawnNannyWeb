import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

export const Home = props => (
  <SvgIcon className={props.homeIcon}>
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
  </SvgIcon>
);

Home.propTypes = {
  homeIcon: PropTypes.func,
};

Home.defaultProps = {
  homeIcon: PropTypes.func,
};
export default Home;
