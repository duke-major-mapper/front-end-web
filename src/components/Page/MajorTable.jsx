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
    const { majors } = this.props;
    const id = majors.indexOf(this.props.major);
    this.props.getClasses(id);
  }

  mapClasses = () => {
    return this.props.data.classes.map((value, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>{value.name}</TableRowColumn>
          <TableRowColumn>{value.class_code}</TableRowColumn>
        </TableRow>
      )
    })
  }

  render() {

    return (
      <div
        style={{
          margin: '15px',
          borderStyle: 'solid'
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
              <TableHeaderColumn
                colSpan="2"
                style={{
                  textAlign: 'center',
                  fontSize: '200%'
                }}
              >
                {this.props.major}
              </TableHeaderColumn>
            </TableRow>
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
