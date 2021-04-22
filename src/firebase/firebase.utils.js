import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyAVdrtmPycOFKS_aqwpFYtT69uEcldTObQ",
  authDomain: "crwn-db-b6987.firebaseapp.com",
  projectId: "crwn-db-b6987",
  storageBucket: "crwn-db-b6987.appspot.com",
  messagingSenderId: "988187434742",
  appId: "1:988187434742:web:fceb34c26e54737f6396d7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
