import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Icon } from 'semantic-ui-react';
import Styles from '../../styles/breadcrumb'

const returnStatus = (selection, id) => {
  if (selection >= id) {
    return 'truck';
  }
  return 'blind';
};

export const breadcrumb = props => (
  <Grid container columns='equal'>
    <Grid.Row>
    <Grid.Column>
    <iframe style={Styles.checkmark}  src="https://lottiefiles.com/iframe/2311-icono-de-confirmacion" frameborder="0" allowfullscreen name={returnStatus(props.selection, 0)}/>
    </Grid.Column>
    <Grid.Column>
    <iframe style={Styles.checkmark}  src="https://lottiefiles.com/iframe/2311-icono-de-confirmacion" frameborder="0" allowfullscreen name={returnStatus(props.selection, 1)}/>
    </Grid.Column>
    <Grid.Column>
    <iframe style={Styles.checkmark}  src="https://lottiefiles.com/iframe/2311-icono-de-confirmacion" frameborder="0" allowfullscreen name={returnStatus(props.selection, 2)}/>
    </Grid.Column>
    <Grid.Column>
    <iframe style={Styles.checkmark} src="https://lottiefiles.com/iframe/2311-icono-de-confirmacion" frameborder="0" allowfullscreen name={returnStatus(props.selection, 3)}/>
    </Grid.Column>
    </Grid.Row>
  </Grid>
);

breadcrumb.propTypes = {
  activeStep: PropTypes.number.isRequired,
};

export default breadcrumb;
