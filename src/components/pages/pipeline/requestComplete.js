import React, { Component } from 'react';
import { Grid, Segment, Icon, Header, Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Styles from '../../../styles/pipeline/requestComplete';
import BreadcrumbComponent from '../../helpers/breadcrumb';

const ButtonDiv = styled.div`
  :active {
    transform: translateY(4px);
  }
`;

class requestComplete extends Component {
  constructor() {
    super();
    this.state = {
      dataBaseError: null,
    };
  }
  render() {
    if (this.props.pageInProgress < 5) {
      return <Redirect to="/pipeline/requestReview" />;
    }
    return (
      <Grid centered container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <BreadcrumbComponent selection={this.props.pageInProgress} current={5} />
          </Segment>
        </Grid.Row>
        <Grid.Row style={Styles.completedRow}>
          <Header icon textAlign="center">
            <Icon style={Styles.icon} name="checkmark" />
            <Header.Content style={Styles.header}>Request Submitted!</Header.Content>
          </Header>
        </Grid.Row>
        <Grid.Row style={Styles.buttonRow}>
          <ButtonDiv>
            <Button style={Styles.button}>Continue to Request </Button>
          </ButtonDiv>
        </Grid.Row>
      </Grid>
    );
  }
}

requestComplete.propTypes = {
  pageInProgress: PropTypes.number,
};

requestComplete.defaultProps = {
  pageInProgress: 0,
};
export default requestComplete;
