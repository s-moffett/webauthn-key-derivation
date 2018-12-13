import React, { Component } from 'react';
import '../card.css';

class DerivationCard extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          <span>Derivation</span>
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
            <input type="text" className="card-input" value={this.props.pin} onChange={this.props.changePIN} placeholder="PIN" />
          </div>
          <div>          
            <button className="card-button" onClick={this.props.deriveKey}>Derive Key</button>
          </div>
        </div>
        <div className="card-footer">          
          <table>
            <tbody>
              <tr>
                <td>Key:</td><td>{this.props.encryptionKey}</td>
              </tr>
            </tbody>
          </table>          
        </div>
      </div>
    );        
  }
}

export default DerivationCard;
