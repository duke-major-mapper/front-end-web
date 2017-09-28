import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './../components/Header';

import logo from './../images/react_logo.svg';
import theme from '../global/material-ui-theme';
import './../styles/App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={theme}>
        <Header />
      </MuiThemeProvider>
    );
  }
}

export default App;
