import React from 'react';
import PropTypes from 'prop-types';
import CreateIcon from '@material-ui/icons/Create';

export const Create = props => <CreateIcon className={props.styling} />;
Create.propTypes = {
  styling: PropTypes.func,
};

Create.defaultProps = {
  styling: PropTypes.func,
};
export default Create;
