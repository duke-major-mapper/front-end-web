import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardMedia, CardHeader} from 'material-ui/Card';

import Welcome from './../components/Page/Welcome';
import MajorTable from './../components/Page/MajorTable';

import { getAllMajors } from './../actions/data';
import { getClasses } from './../actions/data';

let showWelcome = true

class Home extends Component {

  componentWillMount() {
    this.props.getAllMajors();
  }

  render(){
    const { sidebar, classes, data } = this.props

    if (sidebar.submitted){
      showWelcome = false
    }
    return(
      <div
        className={sidebar.docked ? "true-dock" : "false-dock"}
      >
        {showWelcome ? <Welcome /> :
          <Card>
            <CardHeader
              title={sidebar.major1}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardMedia
              expandable={true}
            >
              <MajorTable
                major={sidebar.major1}
              />
            </CardMedia>
          </Card>
        }
          { sidebar.major2 === '' || showWelcome ? null :
          <Card>
            <CardHeader
              title={sidebar.major2}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardMedia
              expandable={true}
            >
              <MajorTable
                major={sidebar.major2}
              />
            </CardMedia>
          </Card>
          }
          { data.isLoading && !showWelcome ?
            <CircularProgress size={80} thickness={6} />
            : null}
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
