import React, { Component } from 'react';
import { createStore } from 'redux';
import reducers from '../../reducers/reducers';

import { Routes } from '../../routes/routes';

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
    return <Routes />;
  }
}

export default App;
