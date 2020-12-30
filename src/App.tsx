import React from 'react';

import {Provider} from 'react-redux';

import Navigator from './navigator';
import store from './store';

const App: React.FC = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
