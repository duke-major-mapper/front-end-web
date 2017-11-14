import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {
  AppBar,
  Drawer,
} from 'material-ui';

import { dockTriggered } from "./../actions/sidebar-action";
import { getAllMajors } from './../actions/data';
import Sidebar from "./Sidebar";

import DMM_header from './../images/DMM_header.png';

class Header extends Component {
  onMenuClick() {
    this.props.dockTriggered();
  }

  render() {
    const logo = (
      <div>
        <img alt="logo" src={DMM_header} height="60em" width="280em"/>
      </div>
    );
    return (
      <div>
        <AppBar
          title={logo}
          onLeftIconButtonTouchTap={this.onMenuClick.bind(this)}
          secondary={true}
        />
        <Drawer
          docked={this.props.sidebar.docked}
          containerStyle={{height: 'calc(100% - 64px)', top: 64}}
        >
          <Sidebar />
        </Drawer>
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
      dockTriggered: dockTriggered,
      getAllMajors: getAllMajors,
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
