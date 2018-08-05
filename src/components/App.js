import React, { Component } from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Sidebar, Menu, Segment } from 'semantic-ui-react';
import reducers from '../reducers/reducers';
import ConnectedNavBarComponent from '../connectedComponents/ConnectedNavBar';
import SidebarContent from './helpers/SidebarContent';
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
                <Sidebar.Pushable as={Segment} style={Styles.sidebarContainer}>
                  <Sidebar
                    style={Styles.sidebar}
                    as={Menu}
                    animation="overlay"
                    inverted
                    vertical
                    visible={this.state.visible}
                  >
                    <SidebarContent />
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
