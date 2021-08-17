import firebase  from "firebase/app";
import config from "./config.json"
import "firebase/firestore";

import "firebase/auth"

firebase.initializeApp(config);


let Provider=new firebase.auth.GoogleAuthProvider();


export const auth=firebase.auth();

export const signInWithGoogle=()=>{
    auth.signInWithPopup(Provider);
}

export default firebase;