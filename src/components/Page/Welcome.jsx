import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Welcome extends Component {
  render(){
    return(
      <div >
        <Jumbotron
          className="home-jumbotron"
        >
          <h1 className="test">Welcome to Duke Major Planner</h1>
          <h3>Please select two majors on the right to find which classes are needed for each major.</h3>
          <p>Duke Major Planner</p>
        </Jumbotron>
      </div>
    );
  }
}
