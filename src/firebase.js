import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAgY2zMJ-LF2_4nBbmsk0WelQT7Af9gNXI",
    authDomain: "clone-ad7bc.firebaseapp.com",
    projectId: "clone-ad7bc",
    storageBucket: "clone-ad7bc.appspot.com",
    messagingSenderId: "505112390420",
    appId: "1:505112390420:web:331ee19376dbe2d4e1b001",
    measurementId: "G-547EZYZDPL"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };