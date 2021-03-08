import React from "react";
import firebase from "firebase";
import { StyledFirebaseAuth } from "react-firebaseui";

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",

  // Redirect to /... after sign in is successful.
  // Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/photos",

  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};

function SignIn() {
  return (
    <div>
      <div className="text-center mb-5" style={{marginTop: '150px'}}>
        <h3>Login with google accounts</h3>
      </div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </div>
  );
}

export default SignIn;
