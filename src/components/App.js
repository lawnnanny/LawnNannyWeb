import React, { Component } from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Sidebar, Menu, Segment, Icon } from 'semantic-ui-react';
import reducers from '../reducers/reducers';
import ConnectedNavBarComponent from '../connectedComponents/ConnectedNavBar';
import Styles from '../styles/App';

import { Routes } from '../helpers/routes';

export class App extends Component {
  constructor() {
    super();

    const store = createStore(reducers);

    this.state = {
      store,
    };

    store.subscribe(() => {
      console.log('store.getState()', store.getState());
    });
  }
  render() {
    return (
      <Provider store={this.state.store}>
        <BrowserRouter className="router">
          <div style={Styles.div}>
            <ConnectedNavBarComponent style={Styles.navBar} />
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation="overlay"
                icon="labeled"
                inverted
                onHide={() => {
                  this.props.setSidebar();
                }}
                vertical
                visible
                width="thin"
              >
                <Menu.Item as="a">
                  <Icon name="home" />
                  Home
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="gamepad" />
                  Games
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="camera" />
                  Channels
                </Menu.Item>
              </Sidebar>
              <Sidebar.Pusher>
                <Routes />
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
