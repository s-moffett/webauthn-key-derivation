import React, { Component } from 'react';
import AuthenticationCard from '../Components/AuthenticationCard/AuthenticationCard';
import DerivationCard from '../Components/DerivationCard/DerivationCard';
import RegistrationCard from '../Components/RegistrationCard/RegistrationCard';
import { RegisterUser, AuthenticateUser, DeriveKey } from './logic';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    
    this.authenticateUser = this.authenticateUser.bind(this);
    this.changePIN = this.changePIN.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
    this.deriveKey = this.deriveKey.bind(this);
    this.registerUser = this.registerUser.bind(this);
    
    this.state = {
      credential: {},      
      encryptionKey: "",
      isUserAuthenticated: false,
      pin: "",
      signature: "", 
      username: ""
    };
  }

  // Let the cards change the app-level PIN.
  changePIN(e) {
    this.setState({
      pin: e.target.value
    });
  }

  // Let the cards change the app-level username.
  changeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  // Authenticate a user with a hardware key.
  authenticateUser() {
    if(this.state.credential !== undefined && this.state.credential.rawId !== undefined) {
      var id = Uint8Array.from(this.state.credential.rawId.split(','));
      var authenticated = AuthenticateUser(id);
      this.setState({
        isUserAuthenticated: authenticated
      });
    }
  }

  // Derive a symmetric encryption key from the hardware key.
  deriveKey() {
    if(this.state.credential !== undefined && this.state.credential.rawId !== undefined) {
      var id = Uint8Array.from(this.state.credential.rawId.split(','));
      var key = DeriveKey(id, this.state.pin);
      this.setState({
        encryptionKey: key
      });
    }    
  }

  // Register a user and hardware key.
  registerUser() {
    var credential = RegisterUser(this.state.username);
    this.setState({
      credential: credential
    });
  }

  render() {
    return(
      <div className="app">        
        <div className="header">
          WebAuthn Key Derivation
        </div>
        <div className="card-folder">
          <RegistrationCard
            changeUsername={this.changeUsername} 
            credential={this.state.credential}
            registerUser={this.registerUser} />
          <AuthenticationCard 
            authenticateUser={this.authenticateUser}
            isUserAuthenticated={this.state.isUserAuthenticated}
            username={this.state.username} />          
          <DerivationCard 
            changePIN={this.changePIN}
            deriveKey={this.deriveKey}
            encryptionKey={this.state.encryptionKey}
            pin={this.state.pin}
            username={this.state.username} />
        </div>        
      </div>
    );
  }
}

export default App;
