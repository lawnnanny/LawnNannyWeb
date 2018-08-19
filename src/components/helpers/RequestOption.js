import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Header, Button, Icon } from 'semantic-ui-react';
import Styles from '../../styles/helpers/RequestOption';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
export const RequestOption = props => (
  <Link to="/pipeline/requestInformation">
    <ButtonDiv>
      <Button fluid style={Styles.button} onClick={() => props.onClick()}>
        <Header as="h2" floated="left" style={Styles.header}>
          <Image style={Styles.image} src={props.imageURL} size="massive" circular />
          {props.title}
        </Header>
        <Icon name="right arrow" style={Styles.icon} />
      </Button>
    </ButtonDiv>
  </Link>
);

RequestOption.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default RequestOption;
