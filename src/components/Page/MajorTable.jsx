import React, { Component } from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class MajorTable extends Component {

  mapClasses() {
    return this.props.majorClasses.map((value, index) => {
      return (
        <TableRow key={index}>
          <TableRowColumn>{value.class_name}</TableRowColumn>
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
