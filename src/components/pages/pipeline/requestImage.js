import React from "react";
import { Image, Segment, Header } from "semantic-ui-react";
import Styles from "../../../styles/requestImage";

export const requestImage = props => (
  <div>
    <Segment>
      <Header as="h2">
        <Image
          style={Styles.imageBorder}
          src={props.imageURL}
          size="massive"
          circular
        />
        {props.title}
      </Header>
    </Segment>
  </div>
);

export default requestImage;
