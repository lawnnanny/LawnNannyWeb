import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Header, Button } from 'semantic-ui-react';
import Styles from '../../styles/RequestOption';

export const RequestOption = props => (
  <Link to="/pipeline/requestInformation">
    <Button fluid style={Styles.button} onClick={() => props.onClick()}>
      <Header as="h2" floated="left">
        <Image style={Styles.image} src={props.imageURL} size="massive" circular />
        {props.title}
      </Header>
    </Button>
  </Link>
);

RequestOption.defaultProps = {
  onClick: PropTypes.func,
  imageURL: PropTypes.string,
  title: PropTypes.string,
};

export default RequestOption;
