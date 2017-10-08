import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

export default class Welcome extends Component {
  render(){
    const styles = {
      background: 'black'
    }

    return(
      <div>
        <Jumbotron
          className="home-jumbotron"
        >
          <h2>Welcome to Duke Major Planner</h2>
        </Jumbotron>
      </div>
    );
  }
}
