import React from "react";
import { Link } from "react-router-dom";
import { Image, Segment, Header, Button } from "semantic-ui-react";
import Styles from "../../styles/RequestOption";

export const RequestOption = props => (
  <div>
    <Segment style={Styles.segment}>
      <Link to="/pipeline/requestInformation">
        <Button fluid style={Styles.button} onClick={() => props.onClick()}>
          <Header as="h2" floated="left">
            <Image
              style={Styles.image}
              src={props.imageURL}
              size="massive"
              circular
            />
            {props.title}
          </Header>
        </Button>
      </Link>
    </Segment>
  </div>
);

export default RequestOption;
