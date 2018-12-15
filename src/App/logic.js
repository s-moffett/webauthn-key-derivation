
export function RegisterUser(username) {
  return navigator.credentials.create({
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
  });
}

export function AuthenticateUser(ID) {
  return navigator.credentials.get({
    publicKey: {
        challenge: new Uint8Array(),
        timeout: 20000,            
        allowCredentials: [{
            type: "public-key",                
            id: ID
        }],            
    }
  });
};

export function DeriveKey(ID, pin) {  
  return navigator.credentials.get({
    publicKey: {
      challenge: Uint8Array.from(pin.split('')),
      timeout: 20000,            
      allowCredentials: [{
          type: "public-key",                
          id: ID
      }],            
    }
  });
};
