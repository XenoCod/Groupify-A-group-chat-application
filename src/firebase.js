import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCd3I3oReFebd1IpOk9VYbM-NuCJ5TKIWE",
  authDomain: "slack-x-c8c12.firebaseapp.com",
  projectId: "slack-x-c8c12",
  storageBucket: "slack-x-c8c12.appspot.com",
  messagingSenderId: "157819373475",
  appId: "1:157819373475:web:0181ea268880178becfc16",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
