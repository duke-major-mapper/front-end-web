import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import { buttonTriggered } from './../../actions/sidebar-action';
import DropDown from './DropDown';

class Sidebar extends Component {
  state = {
    error: '',
  };

  onButtonClicked() {
    if(this.props.major1 === ''){
      this.setState({error: 'Please enter a Major 1.'})
      return;
    }
    else if (this.props.major1 === this.props.major2){
      this.setState({error: 'Please select different Majors.'})
      return;
    }
    this.setState({error: ''})
    this.props.buttonTriggered();
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
    major2: state.sidebar.major2
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      buttonTriggered: buttonTriggered
    },
    dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
