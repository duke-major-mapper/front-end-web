import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import RaisedButton from 'material-ui/RaisedButton';

import { getOverlap } from './../../actions/data';

const labelStyle = {
  fontSize: '200%'
};

const buttonStyle = {
  height: '5em',
};

const style = {
  margin: '8px'
};

class OverlapButton extends Component {
  handleClick = () => {
    const { sidebar, data, majors, getOverlap } = this.props;
    const major1 = sidebar.major1;
    const major2 = sidebar.major2;

    const id1 = majors.indexOf(major1);
    const id2 = majors.indexOf(major2);

    getOverlap(id1, id2);
  }

  render() {
    return (
      <div
        style={style}
      >
        <RaisedButton
          label="Overlap"
          labelStyle={labelStyle}
          primary={true}
          onClick={this.handleClick.bind(this)}
          fullWidth={true}
          buttonStyle={buttonStyle}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sidebar: state.sidebar,
    data: state.data,
    majors: state.data.majors,
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      getOverlap: getOverlap,
    },
    dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(OverlapButton);
