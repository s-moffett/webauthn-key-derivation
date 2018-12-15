import React, { Component } from 'react';
import '../card.css';

class AuthenticationCard extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {

    var authenticated = "No";
    if(this.props.isUserAuthenticated) {
      authenticated = "Yes";
    }

    return(
      <div className="card">
        <div className="card-header">
          <span>Authentication</span>
        </div>
        <div className="card-body">
          <div className="card-body-component-div">            
            <p>Username: {this.props.username}</p>
          </div>
          <div className="card-body-component-div">          
            <button className="card-button" onClick={this.props.authenticateUser}>Authenticate</button>
          </div>
        </div>
        <div className="card-footer">
          <div className="centered">
            <p>Authenticated:</p>
            <span>{authenticated}</span>
          </div> 
        </div>
      </div>
    );        
  }
}

export default AuthenticationCard;
