import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import Welcome from './../components/Page/Welcome';
import MajorTable from './../components/Page/MajorTable';

import { getAllMajors } from './../actions/data';
import { getClasses } from './../actions/data';

let showWelcome = true

class Home extends Component {

  componentWillMount() {
    this.props.getAllMajors();
  }

  getMajorClasses = (major) => {
    const { majors } = this.props;
    const id = majors.indexOf(major) + 1;
    // this.props.getClasses(id);
    console.log(this.props.data.classes);
    return this.props.classes[major];
  }

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
            majorClasses={this.getMajorClasses(sidebar.major1)}
          />}
          { sidebar.major2 === '' || showWelcome ? null :
            <MajorTable
              major={sidebar.major2}
              majorClasses={this.getMajorClasses(sidebar.major1)}
            />
          }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    classes: state.classes,
    data: state.data,
    majors: state.data.majors,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getClasses: getClasses,
      getAllMajors: getAllMajors,
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
