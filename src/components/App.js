import React, { Component } from 'react';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
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
          <Route
            render={props => (
              <div style={Styles.div} {...props}>
                <ConnectedNavBarComponent style={Styles.navBar} {...props} />
                <Routes />
              </div>
            )}
          />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
