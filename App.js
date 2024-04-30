import React from "react";
import { StyleSheet, View } from "react-native";
import WelcomeScreen from "./screens/welcomeScreen.js";
import RouteManagement from "./router/router.js";

export default function App() {
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
