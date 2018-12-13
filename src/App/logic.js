
export function RegisterUser(username) {
  navigator.credentials.create({
    publicKey: {
      challenge: new Uint8Array(),
      rp: {        
        name: "Capstone Project"
      },
      user: {
        id: new Uint8Array(),
        name: username,
        displayName: username
      },
      pubKeyCredParams: [{
        type: "public-key",
        alg: -7
      }],
      attestation: "direct"
    }
  }).then((rawCredential) => {
    var credential = {
      id: rawCredential.id,
      rawId: new Uint8Array(rawCredential.rawId).toString(),
      response: {
        attestationObject: new Uint8Array(rawCredential.response.attestationObject).toString(),
        clientDataJSON: new Uint8Array(rawCredential.response.clientDataJSON).toString()
      },
      type: 'public-key'
    };

    return credential;
  });
}

export function AuthenticateUser(ID) {
  navigator.credentials.get({
    publicKey: {
        challenge: new Uint8Array(),
        timeout: 20000,            
        allowCredentials: [{
            type: "public-key",                
            id: ID
        }],            
    }
  }).then((credential) => {
    return true;
  }).catch((err) => {
    return false;
  });
};

export function DeriveKey(ID, pin) {  
  navigator.credentials.get({
    publicKey: {
      challenge: Uint8Array.from(pin.split('')),
      timeout: 20000,            
      allowCredentials: [{
          type: "public-key",                
          id: ID
      }],            
    }
  }).then((credential) => {
    crypto.subtle.digest("SHA-256", credential.response.signature).then((hash) => {
      return hash;
    });
  }).catch((err) => {
    return "Error";
  });
};
