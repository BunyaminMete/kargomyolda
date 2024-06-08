import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAULHOWF7klBKJBq_fGGXtCdEaNM-solmo",
  authDomain: "kargomyolda.firebaseapp.com",
  databaseURL:
    "https://kargomyolda-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "kargomyolda",
  storageBucket: "kargomyolda.appspot.com",
  messagingSenderId: "76046646433",
  appId: "1:76046646433:web:73df110ef1e1f53ad944e0",
  measurementId: "G-DQV9MXGN9R",
};

firebase.initializeApp(firebaseConfig);

// Firebase Authentication ile ilgili işlemleri yapabilirsiniz
const auth = firebase.auth();

const setupAuthStateChanged = (callback) => {
  return auth.onAuthStateChanged(callback);
};

export { auth, setupAuthStateChanged, firebaseConfig };
