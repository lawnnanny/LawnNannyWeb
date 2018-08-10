import React, { Component } from 'react';
import {
  Grid,
  Image,
  Menu,
  Header,
  Button,
  Rating,
  Segment,
  Icon,
  Label,
  Sticky,
  Rail,
} from 'semantic-ui-react';
import styled from 'styled-components';
import Media from 'react-media';
import device from '../../helpers/devices';
import Styles from '../../styles/requestPage';
import shane from '../../images/shane.png';
import home from '../../images/home.jpg';
import JobDescription from '../helpers/JobDescription';

const MyImage = styled(Image)`
  &&& {
    width: 100%;

    @media ${device.mobileS} {
      height: 270px;
    }
    @media ${device.mobileM} {
      height: 300px;
    }
    @media ${device.mobileL} {
      height: 330px;
    }
    @media ${device.tablet} {
      height: 440px;
    }
  }
`;

export default class requestPage extends Component {
  state = { context: null };

  handleContextRef = (ref) => {
    this.setState({ context: ref });
  };
  render() {
    return (
      <Grid container style={Styles.grid}>
        <Grid.Row textAlign="center" style={Styles.imageRow}>
          <MyImage src={home} />
        </Grid.Row>
        <div ref={this.handleContextRef} style={{ width: '100%' }}>
          <Grid>
            <Grid.Row>
              <Grid.Column mobile={16} tablet={16} computer={10} style={Styles.leftContent}>
                <Grid.Row textAlign="left" style={Styles.headerRow}>
                  <Header as="h1" style={Styles.header}>
                    Small lawn by the river. No problems
                  </Header>
                </Grid.Row>
                <Grid.Row textAlign="left" style={Styles.userRow}>
                  <Header>
                    <Image circular src={shane} style={Styles.userIcon} />
                    Shane Drafahl
                  </Header>
                </Grid.Row>
                <Grid.Row style={Styles.ratingRow}>
                  <Rating
                    disabled
                    icon="star"
                    defaultRating={5}
                    maxRating={5}
                    style={Styles.userRating}
                  />
                  <div style={Styles.ratingReviews}>10 Reviews</div>
                </Grid.Row>
                <Grid.Row textAlign="left">
                  <Segment style={Styles.descriptionSegment}>
                    <Header style={Styles.descriptionHeader}>Job Description</Header>
                    <p>
                      My apartment is very unique and well finished in the Tuscan tradition. He has
                      his privacy in all, well tenuto.C kitchen is a living room of about 14sqm with
                      small sofa bed for one and a half, provided fgrigorifero, electric oven, sink,
                      stove, washing machine and all the accessories to be able to safely eat , then
                      there is a well-kept brick bathroom with shower and sink, bathroom, we also
                      have the sleeping area consists of a small room with a French bed, hallway
                      with wardrobe, etc. .... including heating independent heating for the winter
                      period. In the exterior we have a private parking, a swimming pool and a
                      relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same od. In the exterior we have a private parking, a swimming pool and a
                      relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same od. In the exterior we have a private parking, a swimming pool and a
                      relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same od. In the exterior we have a private parking, a swimming pool and a
                      relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same od. In the exterior we have a private parking, a swimming pool and a
                      relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same od. In the exterior we have a private parking, a swimming pool and a
                      relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same My apartment is very unique and well finished in the Tuscan tradition. He
                      has his privacy in all, well tenuto.C kitchen is a living room of about 14sqm
                      with small sofa bed for one and a half, provided fgrigorifero, electric oven,
                      sink, stove, washing machine and all the accessories to be able to safely eat
                      , then there is a well-kept brick bathroom with shower and sink, bathroom, we
                      also have the sleeping area consists of a small room with a French bed,
                      hallway with wardrobe, etc. .... including heating independent heating for the
                      winter period. In the exterior we have a private parking, a swimming pool and
                      a relaxing space to use for breakfasts, lunches and dinners during the summer.
                      All located in the village of Rignano SullArno (just 40 minutes by train from
                      Florence center) served by the national railways to get anywhere, and at the
                      same
                    </p>
                  </Segment>
                </Grid.Row>
              </Grid.Column>
              <Media query={device.laptop}>
                {matches =>
                  (matches ? (
                    <Grid.Column computer={6} style={Styles.rightContent} floated="right">
                      <Rail
                        internal
                        attached
                        style={{ top: 'auto', height: 'auto', width: '100%' }}
                      >
                        <Sticky bottomOffset={50} context={this.state.context} offset={50}>
                          <Segment raised padded textAlign="center">
                            <Label style={Styles.priceLabel}>
                              <Icon name="dollar" style={Styles.priceIcon} />
                              25
                            </Label>
                            <Button fluid style={Styles.requestButtonDesktop}>
                              Request Service
                            </Button>
                            <Header>Contact User</Header>
                          </Segment>
                        </Sticky>
                      </Rail>
                    </Grid.Column>
                  ) : (
                    <Menu borderless fixed="bottom" style={Styles.bottomMenu} fluid>
                      <Menu.Item style={Styles.priceItem}>
                        <Label style={Styles.priceLabel}>
                          <Icon name="dollar" style={Styles.priceIcon} />
                          25
                        </Label>
                      </Menu.Item>
                      <Menu.Item style={Styles.requestItem}>
                        <Button style={Styles.requestButton}>Request Service</Button>
                      </Menu.Item>
                    </Menu>
                  ))
                }
              </Media>
            </Grid.Row>
          </Grid>
        </div>
        <div style={Styles.Bottom} />
      </Grid>
    );
  }
}
