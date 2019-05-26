import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

export const Menu = props => (
  <SvgIcon className={props.styling}>
    <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
  </SvgIcon>
);
Menu.propTypes = {
  styling: PropTypes.func,
};

Menu.defaultProps = {
  styling: PropTypes.func,
};
export default Menu;
