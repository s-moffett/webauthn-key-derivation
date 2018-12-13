import React, { Component } from 'react';
import './AuthenticationCard.css';
import '../card.css';

class AuthenticationCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    var authenticated = "No";
    if(this.props.isUserAuthenticated) {
      authenticated = "Yes";
    }

    var results;
    if(this.props.isUserAuthenticated) {
      results = 
        <table>
          <tbody>
            <tr>
              <td>Authenticated:</td><td>{authenticated}</td>
            </tr>
          </tbody>
        </table>  
    } else {
      results = <div></div>
    }

    return(
      <div className="card">
        <div className="card-header">
          <span>Authentication</span>
        </div>
        <div className="card-body">
          <div>            
            <table>
              <tbody>
                <tr>
                  <td>Username:</td><td>{this.props.username}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>          
            <button className="card-button" onClick={this.props.authenticateUser}>Authenticate</button>
          </div>
        </div>
        <div className="card-footer">
          {results}      
        </div>
      </div>
    );        
  }
}

export default AuthenticationCard;
