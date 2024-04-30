import React from "react";
import { StyleSheet, View } from "react-native";
import SplashScreen from "./screens/splashScreen.js";

export default function App() {
  return (
    <View style={styles.container}>
      <SplashScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
