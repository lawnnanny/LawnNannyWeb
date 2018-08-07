import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu, Icon, Button, Header,Sticky } from 'semantic-ui-react';
import Styles from '../../styles/helpers/SidebarContent';
import SideRequest from './SideRequest'

const MyButton = styled(Button)`
  &&& {
    :hover {
      background: white;
      font-size: 1.5em;
    }
  }
`;
const MyItem = styled(Menu.Item)`
  &&& {
    :hover {
      background: #20ad1d;
      color: white !important;
    }
  }
`;
const RequestItem = styled(Menu.Item)`
  &&& {
    :hover {
      background: #20ad1d;
      color: white !important;
    }
  }
`;
const request = {
  fields: [
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
    {
      header: 'Lawn in Newton',
      rating:3,
      price:'25'
    },
  ],
};
export default class SidebarContent extends Component {
  constructor() {
    super();
    this.state = { request: false };
  }
  requestChange = () => this.setState({ request: !this.state.request });
  renderRequest = field => (
    <RequestItem>
    <SideRequest
    header={field.header}
    rating={field.rating}
    price={field.price}
    />
    </RequestItem>
  );
  renderRequests = (form) => {
    const formUI = form.fields.map(field => this.renderRequest(field));
    return formUI;
  };
  render() {
    return this.state.request ? (
    <div>
      <Menu.Item style={Styles.topItem}>
        <Button
          icon
          onClick={() => {
            this.props.handleButtonClick();
          }}
          style={Styles.barsButton}
        >
          <Icon name="bars" style={Styles.menuDropdown} />
        </Button>
        <MyButton
          style={Styles.requestMenuButton}
          onClick={() => {
            this.requestChange();
          }}
        >
          Open Menu
        </MyButton>
      </Menu.Item>
      <Header style={Styles.requestHeader}> Nearby Requests </Header>
      {this.renderRequests(request)}
    </div>
    ) : (
      <div>
        <Menu.Item style={Styles.topItem}>
          <Button
            icon
            onClick={() => {
              this.props.handleButtonClick();
            }}
            style={Styles.barsButton}
          >
            <Icon name="bars" style={Styles.menuDropdown} />
          </Button>
          <MyButton
            style={Styles.requestButton}
            onClick={() => {
              this.requestChange();
            }}
          >
            Nearby Requests
          </MyButton>
        </Menu.Item>
        <Link to="/HomePage" style={Styles.homeLink}>
          <MyItem style={Styles.homeItem}>
            <Icon name="home" />
            Home
          </MyItem>
        </Link>
        <Link to="/HomePage" style={Styles.aboutLink}>
          <MyItem style={Styles.homeItem}>
            <Icon name="info" style={Styles.aboutIcon} />
            About Terra
          </MyItem>
        </Link>
        <Link to="/HomePage">
          <MyItem style={Styles.termsItem}>Terms of Service</MyItem>
        </Link>
      </div>
    );
  }
}
