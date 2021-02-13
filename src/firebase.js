import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZTGZw_gt7Aufxqw-5h1PwW_1cVNzFGCg",
  authDomain: "clsm-d0369.firebaseapp.com",
  projectId: "clsm-d0369",
  storageBucket: "clsm-d0369.appspot.com",
  messagingSenderId: "813271531135",
  appId: "1:813271531135:web:eae02daedc3c696e96494a",
  measurementId: "G-FB9FNEM3TF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
