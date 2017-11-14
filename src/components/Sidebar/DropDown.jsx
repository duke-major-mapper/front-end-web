import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import { connect } from "react-redux";
import {
  SelectField,
  MenuItem,
} from "material-ui";

import { majorChanged } from "./../../actions/sidebar-action";
import { getAllMajors } from './../../actions/data';


let majorList = ['']
let isFirstRender = true;

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
  }

  componentWillReceiveProps(newProps) {
    if (newProps.majors.length > 0 && isFirstRender) {
      // majorList will concat name of majors
      majorList = newProps.majors;
      isFirstRender = false;
    }
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
    classes: state.classes,
    data: state.data,
    majors: state.data.majors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      majorChanged: majorChanged,
      getAllMajors: getAllMajors,
    },
    dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(DropDown);
