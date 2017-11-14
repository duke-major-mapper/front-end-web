import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import { buttonTriggered } from './../../actions/sidebar-action';
import { getClasses } from './../../actions/data';
import DropDown from './DropDown';

class Sidebar extends Component {
  state = {
    error: '',
  };

  onButtonClicked() {
    const { data, majors, major1, major2, getClasses } = this.props;
    if(major1 === ''){
      this.setState({error: 'Please enter a Major 1.'})
      return;
    }
    else if (major1 === major2){
      this.setState({error: 'Please select different Majors.'})
      return;
    }
    this.setState({error: ''})
    this.props.buttonTriggered();
    const id1 = majors.indexOf(major1);
    const id2 = majors.indexOf(major2);

    if (!data.classes[id1]) {
      getClasses(id1);
    }
    if (!data.classes[id2]) {
      getClasses(id2);
    }
  }

  render() {

    return (
      <div>
        <DropDown majorNum={1}/>
        <DropDown majorNum={2} />
        <RaisedButton
          label="Submit"
          fullWidth={true}
          primary={true}
          onClick={this.onButtonClicked.bind(this)}
          style={{
            marginTop: '25px'
          }}
        />
        <div className="error-mess">{this.state.error}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    submitted: state.sidebar.submitted,
    major1: state.sidebar.major1,
    major2: state.sidebar.major2,
    data: state.data,
    majors: state.data.majors,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buttonTriggered: buttonTriggered,
      getClasses: getClasses,
    },
    dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
