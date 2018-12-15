(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(19)},13:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),l=a(5),c=a(4),i=a(6),s=a(1),u=a(0),d=a.n(u),m=(a(7),function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e="No";return this.props.isUserAuthenticated&&(e="Yes"),d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("span",null,"Authentication")),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"card-body-component-div"},d.a.createElement("p",null,"Username: ",this.props.username)),d.a.createElement("div",{className:"card-body-component-div"},d.a.createElement("button",{className:"card-button",onClick:this.props.authenticateUser},"Authenticate"))),d.a.createElement("div",{className:"card-footer"},d.a.createElement("div",{className:"centered"},d.a.createElement("p",null,"Authenticated:"),d.a.createElement("span",null,e))))}}]),t}(u.Component)),o=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.encryptionKey.length/3;return d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("span",null,"Derivation")),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"centered card-body-component-div"},d.a.createElement("p",null,"Username: ",this.props.username)),d.a.createElement("div",{className:"card-body-component-div"},d.a.createElement("input",{type:"text",className:"card-input",value:this.props.pin,onChange:this.props.changePIN,placeholder:"PIN"})),d.a.createElement("div",{className:"card-body-component-div"},d.a.createElement("button",{className:"card-button",onClick:this.props.deriveKey},"Derive Key"))),d.a.createElement("div",{className:"card-footer"},d.a.createElement("div",{className:"centered"},d.a.createElement("p",null,"Key:"),d.a.createElement("span",null,this.props.encryptionKey.substring(0,e)),d.a.createElement("br",null),d.a.createElement("span",null,this.props.encryptionKey.substring(e,2*e)),d.a.createElement("br",null),d.a.createElement("span",null,this.props.encryptionKey.substring(2*e)))))}}]),t}(u.Component),p=function(e){function t(e){return Object(n.a)(this,t),Object(l.a)(this,Object(c.a)(t).call(this,e))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e;if(void 0!==this.props.credential&&void 0!==this.props.credential.response){var t=(new TextDecoder).decode(new Uint8Array(this.props.credential.response.clientDataJSON.split(","))),a=JSON.parse(t);e=d.a.createElement("div",null,d.a.createElement("table",null,d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"ID:")),d.a.createElement("td",null,this.props.credential.id.substring(0,30),"...")),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Attestation:")),d.a.createElement("td",null,this.props.credential.response.attestationObject.substring(0,40),"...")),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Challenge:")),d.a.createElement("td",null,a.challenge)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Algorithm:")),d.a.createElement("td",null,a.hashAlgorithm)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Origin:")),d.a.createElement("td",null,a.origin)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Type:")),d.a.createElement("td",null,this.props.credential.type)))))}else e=d.a.createElement("div",null,d.a.createElement("table",null,d.a.createElement("tbody",null,d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"ID:")),d.a.createElement("td",null)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Attestation:")),d.a.createElement("td",null)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Challenge:")),d.a.createElement("td",null)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Algorithm:")),d.a.createElement("td",null)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Origin:")),d.a.createElement("td",null)),d.a.createElement("tr",null,d.a.createElement("td",null,d.a.createElement("b",null,"Type:")),d.a.createElement("td",null)))));return d.a.createElement("div",{className:"card"},d.a.createElement("div",{className:"card-header"},d.a.createElement("span",null,"Registration")),d.a.createElement("div",{className:"card-body"},d.a.createElement("div",{className:"card-body-component-div"},d.a.createElement("input",{type:"text",className:"card-input",value:this.props.username,onChange:this.props.changeUsername,placeholder:"Username"})),d.a.createElement("div",{className:"card-body-component-div"},d.a.createElement("button",{className:"card-button",onClick:this.props.registerUser},"Register"))),d.a.createElement("div",{className:"card-footer"},e))}}]),t}(u.Component);a(13);var h=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(l.a)(this,Object(c.a)(t).call(this,e))).authenticateUser=a.authenticateUser.bind(Object(s.a)(Object(s.a)(a))),a.changePIN=a.changePIN.bind(Object(s.a)(Object(s.a)(a))),a.changeUsername=a.changeUsername.bind(Object(s.a)(Object(s.a)(a))),a.deriveKey=a.deriveKey.bind(Object(s.a)(Object(s.a)(a))),a.registerUser=a.registerUser.bind(Object(s.a)(Object(s.a)(a))),a.state={credential:{},encryptionKey:"",isUserAuthenticated:!1,pin:"",signature:"",username:""},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"changePIN",value:function(e){this.setState({pin:e.target.value})}},{key:"changeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"authenticateUser",value:function(){var e,t=this;if(void 0!==this.state.credential&&void 0!==this.state.credential.rawId){var a=Uint8Array.from(this.state.credential.rawId.split(","));(e=a,navigator.credentials.get({publicKey:{challenge:new Uint8Array,timeout:2e4,allowCredentials:[{type:"public-key",id:e}]}})).then(function(e){t.setState({isUserAuthenticated:!0})}).catch(function(e){t.setState({isUserAuthenticated:!1})})}}},{key:"deriveKey",value:function(){var e,t,a=this;if(void 0!==this.state.credential&&void 0!==this.state.credential.rawId){var n=Uint8Array.from(this.state.credential.rawId.split(","));(e=n,t=this.state.pin,navigator.credentials.get({publicKey:{challenge:Uint8Array.from(t.split("")),timeout:2e4,allowCredentials:[{type:"public-key",id:e}]}})).then(function(e){crypto.subtle.digest("SHA-256",e.response.signature).then(function(e){console.log("Encryption key: "+new Uint8Array(e).toString()),a.setState({encryptionKey:new Uint8Array(e).toString()})})}).catch(function(e){})}}},{key:"registerUser",value:function(){var e,t=this;(e=this.state.username,navigator.credentials.create({publicKey:{challenge:new Uint8Array,rp:{name:"Capstone Project"},user:{id:new Uint8Array,name:e,displayName:e},pubKeyCredParams:[{type:"public-key",alg:-7}],attestation:"direct"}})).then(function(e){var a={id:e.id,rawId:new Uint8Array(e.rawId).toString(),response:{attestationObject:new Uint8Array(e.response.attestationObject).toString(),clientDataJSON:new Uint8Array(e.response.clientDataJSON).toString()},type:"public-key"};t.setState({credential:a})})}},{key:"render",value:function(){return d.a.createElement("div",{className:"app"},d.a.createElement("div",{className:"header"},"WebAuthn Key Derivation"),d.a.createElement("div",{className:"card-folder"},d.a.createElement(p,{changeUsername:this.changeUsername,credential:this.state.credential,registerUser:this.registerUser}),d.a.createElement(m,{authenticateUser:this.authenticateUser,isUserAuthenticated:this.state.isUserAuthenticated,username:this.state.username}),d.a.createElement(o,{changePIN:this.changePIN,deriveKey:this.deriveKey,encryptionKey:this.state.encryptionKey,pin:this.state.pin,username:this.state.username})))}}]),t}(u.Component),E=a(9);a.n(E).a.render(d.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,a){}},[[10,2,1]]]);
//# sourceMappingURL=main.bebf47f8.chunk.js.map