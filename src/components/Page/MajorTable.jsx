import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { getClasses } from './../../actions/data';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class MajorTable extends Component {

  componentWillMount() {
    const { majors, major } = this.props;
    const id = majors.indexOf(major);
    this.props.getClasses(id);
  }

  mapClasses = () => {
    const { majors, major, data, overlappedClasses } = this.props;
    const id = majors.indexOf(major);
    if (overlappedClasses) {
      return overlappedClasses.map((value, index) => {
        return (
          <TableRow key={index}>
            <TableRowColumn>{value.name}</TableRowColumn>
            <TableRowColumn>{value.class_code}</TableRowColumn>
          </TableRow>
        )
      })
    } else if (data.classes[id]) {
      return data.classes[id].map((value, index) => {
        return (
          <TableRow key={index}>
            <TableRowColumn>{value.name}</TableRowColumn>
            <TableRowColumn>{value.class_code}</TableRowColumn>
          </TableRow>
        )
      })
    } else {
      return null;
    }
  }

  render() {
    const { sidebar } = this.props;
    if (!sidebar.submitted) {
      return null;
    }

    return (
      <div
        style={{
          margin: '15px'
        }}
      >
        <Table
          height='300px'
          selectable={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn style={{ textAlign: 'left' }}>Class Name</TableHeaderColumn>
              <TableHeaderColumn>Class Code</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
             displayRowCheckbox={false}
             stripedRows={true}
          >
            {this.mapClasses()}
          </TableBody>
        </Table>
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
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MajorTable);
