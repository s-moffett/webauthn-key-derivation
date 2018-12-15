import React, { Component } from 'react';
import '../card.css';

class DerivationCard extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  render() {

    var keyLineLength = this.props.encryptionKey.length / 3;

    return(
      <div className="card">
        <div className="card-header">
          <span>Derivation</span>
        </div>
        <div className="card-body">
          <div className="centered card-body-component-div">
            <p>Username: {this.props.username}</p>          
          </div>
          <div className="card-body-component-div">
            <input type="text" className="card-input" value={this.props.pin} onChange={this.props.changePIN} placeholder="PIN" />
          </div>
          <div className="card-body-component-div">          
            <button className="card-button" onClick={this.props.deriveKey}>Derive Key</button>
          </div>
        </div>
        <div className="card-footer">          
          <div className="centered">
            <p>Key:</p>        
            <span>{this.props.encryptionKey.substring(0, keyLineLength)}</span><br/>
            <span>{this.props.encryptionKey.substring(keyLineLength, keyLineLength * 2)}</span><br/>
            <span>{this.props.encryptionKey.substring(keyLineLength * 2)}</span>
          </div>
        </div>
      </div>
    );        
  }
}

export default DerivationCard;
