import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCz7uHdlMTKJSKPbzoY6lq4ZXcU_bha6j4",
    authDomain: "reel-6b85e.firebaseapp.com",
    projectId: "reel-6b85e",
    storageBucket: "reel-6b85e.appspot.com",
    messagingSenderId: "13831193126",
    appId: "1:13831193126:web:45ba4f2818414c9c561ce7"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;