import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAvKQ_Mf1gh-wrmv6Xtwxyjo1sDKb1JrGk",
    authDomain: "docsclone-92966.firebaseapp.com",
    projectId: "docsclone-92966",
    storageBucket: "docsclone-92966.appspot.com",
    messagingSenderId: "887364392063",
    appId: "1:887364392063:web:e06ac07bdacd2044b65b4a"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export { db };