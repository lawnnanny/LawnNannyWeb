import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import up from '../../images/pipeline/up.png';
import down from '../../images/pipeline/down.png';
import Styles from '../../styles/pipeline/requestPrice';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
export const Clickers = props => (
  <div>
    <ButtonDiv>
      <Button style={Styles.triangleTopButton} onClick={props.incrementRequestPrice}>
        <Image centered style={Styles.image} src={up} />
      </Button>
    </ButtonDiv>
    <ButtonDiv>
      <Button style={Styles.triangleBottomButton} onClick={props.decrementRequestPrice}>
        <Image centered style={Styles.image} src={down} />
      </Button>
    </ButtonDiv>
  </div>
);
Clickers.propTypes = {
  incrementRequestPrice: PropTypes.func,
  decrementRequestPrice: PropTypes.func,
};

Clickers.defaultProps = {
  incrementRequestPrice: PropTypes.func,
  decrementRequestPrice: PropTypes.func,
};
export default Clickers;
