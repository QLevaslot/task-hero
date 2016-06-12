import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskApp from '../reducers';

import App from './app.jsx';

class Core extends React.Component {

  constructor() {
    super();
    this.store = createStore(taskApp);
  }

  render() {
    return (
      <Provider store={this.store}>
        <App />
      </Provider>);
  }
}

export default Core;
