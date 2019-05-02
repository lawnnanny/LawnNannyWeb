import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';
import Styles from '../../styles/helpers/DynamicDisplay';
import DynamicChunkComponent from './DynamicChunk';

export const DynamicDisplay = props => (
  <div raised style={Styles.container} textAlign="left">
    <h1 as="h1">{props.requests.selection}</h1>
    <DynamicChunkComponent
      requests={props.requests.requestInformation}
      name="Details"
      link="/pipeline/requestInformation"
    />
    <DynamicChunkComponent
      requests={props.requests.requestLocation}
      name="Location"
      link="/pipeline/requestLocation"
    />
    <div raised style={Styles.priceSegment}>
      <div horizontal style={Styles.topSegment}>
        <div style={Styles.headerSegment}>
          <h3 as="h3" style={Styles.priceHeader}>
            Price
          </h3>
        </div>
        <div textAlign="right" style={Styles.editSegment}>
          <Link to="/pipeline/requestPrice">
            <SvgIcon {...props} style={Styles.editIcon}>
              <path
                d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
S1.293,9.212,1.729,9.212z"
              />
            </SvgIcon>
          </Link>
        </div>
      </div>
      <SvgIcon {...props} style={Styles.editIcon}>
        <path
          d="M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0
l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109
c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483
c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788
S1.293,9.212,1.729,9.212z"
        />
      </SvgIcon>
      {props.requests.requestPrice}
    </div>
  </div>
);
DynamicDisplay.propTypes = {
  requests: PropTypes.obj,
};
DynamicDisplay.defaultProps = {
  requests: PropTypes.obj,
};
export default DynamicDisplay;
