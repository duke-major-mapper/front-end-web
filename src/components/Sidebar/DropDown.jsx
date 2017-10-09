import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {
  SelectField,
  MenuItem,
} from "material-ui";

import { majorChanged } from "./../../actions/sidebar-action";


const majorList = [
  '',
  'Computer Science',
  'Economics',
  'Math',
]

class DropDown extends Component {
  state = {
    value: 0,
  };

  handleChange (event, index, value){
    this.props.majorChanged(this.props.majorNum, majorList[value])
    this.setState({value});
  }

  render() {
    return (
      <SelectField
        floatingLabelText={"Select Major " + this.props.majorNum}
        onChange={this.handleChange.bind(this)}
        value={this.state.value}
        style={{
          paddingTop: '25px',
          paddingLeft: '15px'
        }}
        floatingLabelStyle={{
          color: 'black'
        }}
      >
        <MenuItem value={0} primaryText={majorList[0]} />
        <MenuItem value={1} primaryText={majorList[1]} />
        <MenuItem value={2} primaryText={majorList[2]} />
        <MenuItem value={3} primaryText={majorList[3]} />
      </SelectField>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      majorChanged: majorChanged
    },
    dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
