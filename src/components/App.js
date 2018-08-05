import React, { Component } from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { Sidebar, Menu, Segment, Icon } from 'semantic-ui-react';
import reducers from '../reducers/reducers';
import Actions from '../reducers/Actions';
import ConnectedNavBarComponent from '../connectedComponents/ConnectedNavBar';
import Styles from '../styles/App';

import { Routes } from '../helpers/routes';

export class App extends Component {
  constructor() {
    super();

    const store = createStore(reducers);

    this.state = {
      store,
      visible: false,
    };

    store.subscribe(() => {
      console.log('store.getState()', store.getState());
    });
  }
  handleButtonClick = () => this.setState({ visible: !this.state.visible });

  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    return (
      <Provider store={this.state.store}>
        <BrowserRouter className="router">
          <Route
            render={props => (
              <div style={Styles.div} {...props}>
                <ConnectedNavBarComponent
                  style={Styles.navBar}
                  {...props}
                  handleButtonClick={this.handleButtonClick}
                />
                <Sidebar.Pushable as={Segment}>
                  <Sidebar
                    as={Menu}
                    animation="overlay"
                    icon="labeled"
                    inverted
                    vertical
                    visible={this.state.visible}
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
                  <Sidebar.Pusher dimmed={this.state.visible}>
                    <Routes
                      onClick={() => {
                        this.handleSidebarHide();
                      }}
                    />
                  </Sidebar.Pusher>
                </Sidebar.Pushable>
              </div>
            )}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
