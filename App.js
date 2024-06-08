import React from "react";
import { StyleSheet, View } from "react-native";
import RouteManagement from "./router/router.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default function App() {
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
  // const auth = firebase.auth();

  return (
    <View style={styles.container}>
      <RouteManagement />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
