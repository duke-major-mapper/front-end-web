import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {
  SelectField,
  MenuItem,
} from "material-ui";

import { majorChanged } from "./../../actions/sidebar-action";


let majorList = ['']

class DropDown extends Component {
  constructor(props){
    super(props);
    /**
     * [state description]
     * @number {value} - this holds the MenuItem value for the SelectField to hold
     */
    this.state = {
      value: 0,
    };
    // majorList will concat with the kets of the classes json, hence, the name of the majors
    majorList = majorList.concat(Object.keys(props.classes).sort())
    // this will remove any duplicate items in the array which can occur when using concat()
    majorList = majorList.filter((item, pos) => {return majorList.indexOf(item) === pos});
  }

  handleChange (event, index, value){
    // majorChanged is an action; refer to sidebar-action.js to see what it does
    this.props.majorChanged(this.props.majorNum, majorList[value])
    // changes SelectField value
    this.setState({value});
  }

  /**
   * [mapMenuItems description]
   * @return {[React Components]} [Returns a list of an undefinite number of MenuItems]
   */
  mapMenuItems() {
    return majorList.map((value, index) => {
      return (
        <MenuItem key={index} value={index} primaryText={value} />
      )
    })
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
        {this.mapMenuItems()}
      </SelectField>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    classes: state.classes
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
