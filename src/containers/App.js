// Packages
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
import thunkMiddleware from 'redux-thunk';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Components and Containers
import Header from './../components/Header';
import Home from './Home';

import reducers from "./../reducers";

// Styling
import logo from './../images/react_logo.svg';
import theme from '../global/material-ui-theme';
import './../styles/index.css';

injectTapEventPlugin();

const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-b"
    changePositionKey="ctrl-q"
    defaultIsVisible={false}
  >
    <LogMonitor theme="tomorrow" />
  </DockMonitor>,
);

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  DevTools.instrument(),
);

const store = createStore(reducers, enhancer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <MuiThemeProvider muiTheme={theme}>
            <Header />
            <Home />
          </MuiThemeProvider>
          { <DevTools /> }
        </div>
      </Provider>
    );
  }
}

export default App;
