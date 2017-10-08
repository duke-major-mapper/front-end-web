import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';

import { buttonTriggered } from './../../actions/sidebar-action';
import DropDown from './DropDown';

class Sidebar extends Component {
  onButtonClicked() {
    this.props.buttonTriggered();
  }

  render() {

    return (
      <div>
        <DropDown  label="Select Major 1" />
        <DropDown  label="Select Major 2" />
        <RaisedButton
          label="Submit"
          fullWidth={true}
          primary={true}
          onClick={this.onButtonClicked.bind(this)}
          style={{
            marginTop: '25px'
          }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    submitted: state.submitted
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
