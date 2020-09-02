import * as firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

// web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyChj_rN7FUizvQZBsoPgN8xNsPYBdDYuy0",
  authDomain: "fb-clone-5111f.firebaseapp.com",
  databaseURL: "https://fb-clone-5111f.firebaseio.com",
  projectId: "fb-clone-5111f",
  storageBucket: "fb-clone-5111f.appspot.com",
  messagingSenderId: "992143267122",
  appId: "1:992143267122:web:88bbefd4ee9e147c0d732b",
  measurementId: "G-CM3QJBWJSV",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
//Google signin
const provider = new firebase.auth.GoogleAuthProvider();

// collection references
const postsCollection = db.collection("posts");

// export utils/refs
export {
    db,
    auth,
    provider,
    postsCollection,
  };