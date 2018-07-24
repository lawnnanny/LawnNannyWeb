import React, { Component } from 'react';
import { Grid, Segment, Header, Icon, Input, Button, Image, Popup } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import Styles from '../../../styles/requestPrice';
import up from '../../../images/pipeline/up.png';
import down from '../../../images/pipeline/down.png';
import ConnectedBreadcrumbComponent from '../../../connectedComponents/pipeline/ConnectedBreadcrumb';

export default class requestPrice extends Component {
  componentWillMount() {
    this.props.setCompletedRequestLocation();
  }
  render() {
    return (
      <Grid centered container style={Styles.grid}>
        <Grid.Row style={Styles.breadrow}>
          <Segment style={Styles.segment}>
            <ConnectedBreadcrumbComponent selection={3} />
          </Segment>
        </Grid.Row>
        <Grid.Row style={Styles.headerRow}>
          <Header as="h1" style={Styles.header}>
            Set A Price{' '}
            <Popup
              size="large"
              trigger={<Icon name="question" style={Styles.popupIcon} circular />}
              content="Please specify what you would like the price of the request to be set at. You can change this later on."
              on={['hover', 'click']}
            />
          </Header>
        </Grid.Row>
        <Grid.Row style={Styles.priceRow}>
          <Grid.Column style={Styles.priceColumn}>
            <Grid.Row style={Styles.triangleTopRow}>
              <Button style={Styles.triangleTopButton} onClick={this.props.incrementRequestPrice}>
                <Image centered style={Styles.image} src={up} />
              </Button>
            </Grid.Row>
            <Grid.Row style={Styles.priceRow}>
              <Input
                value={this.props.requestPrice}
                icon="dollar"
                iconPosition="left"
                style={Styles.input}
                onChange={this.props.setRequestPrice}
              />
            </Grid.Row>
            <Grid.Row style={Styles.triangleBottomRow}>
              <Button
                style={Styles.triangleBottomButton}
                onClick={this.props.decrementRequestPrice}
              >
                <Image centered style={Styles.image} src={down} />
              </Button>
            </Grid.Row>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row style={Styles.buttonRow}>
          <Link to="/pipeline/requestReview">
            <Button size="big" style={Styles.button}>
              Continue
            </Button>
          </Link>
        </Grid.Row>
      </Grid>
    );
  }
}
