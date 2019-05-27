import React from 'react';
import PropTypes from 'prop-types';
import HomeIcon from '@material-ui/icons/Home';

export const Home = props => <HomeIcon className={props.homeIcon} />;

Home.propTypes = {
  homeIcon: PropTypes.func,
};

Home.defaultProps = {
  homeIcon: PropTypes.func,
};
export default Home;
