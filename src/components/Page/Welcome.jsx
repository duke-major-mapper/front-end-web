import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import DMM_letters from './../../images/DMM_letters.png';

export default class Welcome extends Component {
  render(){
    return(
      <div >
        <Jumbotron
          className="home-jumbotron"
        >
          <h1 className="test">Welcome to DMM!</h1>
          <h3>Please select one or two majors on the left to find which classes are needed for each major.</h3>
          <img src={DMM_letters} alt="DMM_letters" height='110em'/>
        </Jumbotron>
      </div>
    );
  }
}
