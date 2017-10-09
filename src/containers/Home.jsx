import React, { Component } from 'react';
import { connect } from "react-redux";

import Welcome from './../components/Page/Welcome';

let showWelcome = true

class Home extends Component {

  render(){
    const { sidebar } = this.props

    if (sidebar.submitted){
      showWelcome = false
    }
    return(
      <div
        className={sidebar.docked ? "true-dock" : "false-dock"}
      >
        {showWelcome ? <Welcome /> : null}
        {!sidebar.submitted ? null : null}
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
