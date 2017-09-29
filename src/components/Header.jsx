import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {
  AppBar,
  Drawer,
} from 'material-ui';

import { dockTriggered } from "./../actions/sidebar-action";

class Header extends Component {
  onMenuClick() {
    this.props.dockTriggered();
  }

  render() {
    return (
      <div>
        <AppBar
          title = "Duke Major Planner"
          onLeftIconButtonTouchTap={this.onMenuClick.bind(this)}
        />
        <Drawer
          docked={this.props.sidebar.docked}
          containerStyle={{height: 'calc(100% - 64px)', top: 64}}
        />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      dockTriggered: dockTriggered
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
