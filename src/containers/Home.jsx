import React, { Component } from 'react';
import { connect } from "react-redux";

import Welcome from './../components/Page/Welcome';
import MajorTable from './../components/Page/MajorTable';

let showWelcome = true

class Home extends Component {

  render(){
    const { sidebar, classes } = this.props

    if (sidebar.submitted){
      showWelcome = false
    }
    return(
      <div
        className={sidebar.docked ? "true-dock" : "false-dock"}
      >
        {showWelcome ? <Welcome /> :
          <MajorTable
            major={sidebar.major1}
            majorClasses={classes[sidebar.major1]}
          />}
          { sidebar.major2 === '' ? null :
            <MajorTable
              major={sidebar.major2}
              majorClasses={classes[sidebar.major2]}
            />
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    classes: state.classes
  }
};

export default connect(mapStateToProps)(Home);
