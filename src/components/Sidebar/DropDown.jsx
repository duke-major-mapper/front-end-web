import React, { Component } from 'react';
import {
  SelectField,
  MenuItem,
} from "material-ui";

export default class DropDown extends Component {
  state = {
    value: 1,
  };

  handleChange (event, index, value){
    this.setState({value});
  }

  render() {
    return (
      <SelectField
        floatingLabelText={this.props.label}
        onChange={this.handleChange.bind(this)}
        value={this.state.value}
        style={{
          paddingTop: '25px'
        }}
      >
        <MenuItem value={1} primaryText="" />
        <MenuItem value={2} primaryText="Computer Science" />
        <MenuItem value={3} primaryText="Economics" />
      </SelectField>
    );
  }
}
