// https://facebook-2-6eb19.firebaseapp.com/__/auth/handler

import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyS-tKXnGekrzB44cCtjtIYzIacKJaSI0",
  authDomain: "face-book-81286.firebaseapp.com",
  projectId: "face-book-81286",
  storageBucket: "face-book-81286.appspot.com",
  messagingSenderId: "760826220786",
  appId: "1:760826220786:web:12c84939b671b59d61406b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const storage = firebase.storage();

export { auth, db, storage };
