import React, { Component } from 'react';
import '../card.css';

class RegistrationCard extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);    
  }

  render() {
    var results;
    if(this.props.credential !== undefined && this.props.credential.response !== undefined) {
      var clientDataJSON = new TextDecoder().decode(new Uint8Array(this.props.credential.response.clientDataJSON.split(",")));
      var clientData = JSON.parse(clientDataJSON);

      results = 
        <div>          
          <table>
            <tbody>
              <tr><td><b>ID:</b></td><td>{this.props.credential.id.substring(0, 30)}...</td></tr>
              <tr><td><b>Attestation:</b></td><td>{this.props.credential.response.attestationObject.substring(0, 40)}...</td></tr>
              <tr><td><b>Challenge:</b></td><td>{clientData.challenge}</td></tr>
              <tr><td><b>Algorithm:</b></td><td>{clientData.hashAlgorithm}</td></tr>
              <tr><td><b>Origin:</b></td><td>{clientData.origin}</td></tr>
              <tr><td><b>Type:</b></td><td>{this.props.credential.type}</td></tr>              
            </tbody>
          </table>
        </div>
    } else {
      results =
        <div>          
            <table>
              <tbody>
                <tr><td><b>ID:</b></td><td></td></tr>
                <tr><td><b>Attestation:</b></td><td></td></tr>
                <tr><td><b>Challenge:</b></td><td></td></tr>
                <tr><td><b>Algorithm:</b></td><td></td></tr>
                <tr><td><b>Origin:</b></td><td></td></tr>
                <tr><td><b>Type:</b></td><td></td></tr>              
              </tbody>
            </table>
          </div>
    }

    return(
      <div className="card">
        <div className="card-header">
          <span>Registration</span>
        </div>
        <div className="card-body">
          <div className="card-body-component-div">
            <input type="text" 
              className="card-input" 
              value={this.props.username} 
              onChange={this.props.changeUsername} 
              placeholder="Username" />
          </div>
          <div className="card-body-component-div">          
            <button className="card-button" onClick={this.props.registerUser}>Register</button>
          </div>
        </div>
        <div className="card-footer">
          {results}
        </div>
      </div>
    );        
  }
}

export default RegistrationCard;
