import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from '@material-ui/icons/Menu';

export const Menu = props => <MenuIcon className={props.styling} />;
Menu.propTypes = {
  styling: PropTypes.func,
};

Menu.defaultProps = {
  styling: PropTypes.func,
};
export default Menu;
