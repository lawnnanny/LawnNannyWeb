import React from 'react';
import { createStore } from 'redux';
import reducers from '../reducers/reducers';

import Routes from '../helpers/routes';

function App() {
  const store = createStore(reducers);

  store.subscribe(() => {
    console.log('store.getState()', store.getState());
  });
  return <Routes />;
}

export default App;
