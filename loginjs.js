   type="module"
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
    import {getAuth,  GoogleAuthProvider ,FacebookAuthProvider,GithubAuthProvider,signInWithPhoneNumber, signInWithRedirect, getRedirectResult, signInWithPopup   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
    // import {getAuth,  FacebookAuthProvider , signInWithRedirect, getRedirectResult, signInWithPopup   } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

    const firebaseConfig = {
      apiKey: "AIzaSyAeZw5pKK1HuN92RvbCfcV4hCd-ixKnG20",
      authDomain: "lastproject-888ce.firebaseapp.com",
      projectId: "lastproject-888ce",
      storageBucket: "lastproject-888ce.appspot.com",
      messagingSenderId: "643673221529",
      appId: "1:643673221529:web:913ca12af33779482dcb08"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider(app);
    auth.languageCode = 'it';

    
     //facebook 
     const provider1 = new FacebookAuthProvider(app);
    facebooklogin.addEventListener("click", (e)=>{
    
      signInWithPopup(auth , provider1)
      .then((result) => {
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;  
    alert(user.displayName);
    })
    .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
    });

googleLogin.addEventListener('click',(e)=>{
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;  
    alert(user.displayName);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
    });

    const provider2 = new githubAuthProvider(app);
    githubLogin.addEventListener('click',(e)=>{
  signInWithPopup(auth, provider2)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;  
    alert(user.displayName);
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
    });

    sign.addEventListener('click', (e) => {
      const phoneNumber = getPhoneNumberFromUserInput();
const appVerifier = window.recaptchaVerifier;

const auth = getAuth();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      window.confirmationResult = confirmationResult;
      // ...
    }).catch((error) => {
      const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    });
    })
    const code = getCodeFromUserInput();
confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  // ...
}).catch((error) => {
  const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
});
var credential = firebase.auth.PhoneAuthProvider.credential(confirmationResult.verificationId, code);
firebase.auth().signInWithCredential(credential);
  
