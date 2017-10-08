import React, { Component } from 'react';
import { connect } from "react-redux";

import Welcome from './../components/Page/Welcome';

class Home extends Component {

  render(){
    const { sidebar } = this.props
    return(
      <div
        className={sidebar.docked ? "true-dock" : "false-dock"}
      >
        <Welcome />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
};

export default connect(mapStateToProps)(Home);
