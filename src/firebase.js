import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4YpgmjEBlFxY1Q6CRNN_AmYc6LPYSlTY",
  authDomain: "slack-clone-aef93.firebaseapp.com",
  projectId: "slack-clone-aef93",
  storageBucket: "slack-clone-aef93.appspot.com",
  messagingSenderId: "288454467619",
  appId: "1:288454467619:web:434ac271228cfd9388d196",
};

//Using Firebase Backend servers

//initializeApp will create and initialize a Firebase App Instance with the above mentioned firebaseConfig
const firebaseApp = firebase.initializeApp(firebaseConfig);
//to attach a firebase db to our firebase app instance
const db = firebaseApp.firestore();
//initialize firebase authentication and get a reference to the service
const auth = firebase.auth();

//Setting up Google Auth Provider
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
