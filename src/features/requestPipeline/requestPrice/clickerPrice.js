import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import up from '../../../images/requestPipeline/up.png';
import down from '../../../images/requestPipeline/down.png';
import styles from '../../../styles/requestPipeline/requestPrice/requestPrice.module.css';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;
export const Clickers = props => (
  <div>
    <ButtonDiv>
      <Button className={styles.triangleTopButton} onClick={props.incrementRequestPrice}>
        <Image centered className={styles.image} src={up} />
      </Button>
    </ButtonDiv>
    <ButtonDiv>
      <Button className={styles.triangleBottomButton} onClick={props.decrementRequestPrice}>
        <Image centered className={styles.image} src={down} />
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
