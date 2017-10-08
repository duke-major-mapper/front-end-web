import React, { Component } from 'react';
import { connect } from "react-redux";



class Home extends Component {

  render(){
    const { sidebar } = this.props
    return(
      <div
        className={sidebar.docked ? "true-dock" : "false-dock"}
      >
        Test
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
