import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

import splash_logo from "../assets/splashscreenLogo.png";
import kargoButton from "../assets/kargomyoldaButton.png";
import kargoButtonText from "../assets/kargoyoldaText.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={splash_logo}
        style={styles.logo_image}
        resizeMode="contain"
      />
      <Image source={kargoButton} style={styles.image} resizeMode="contain" />

      <Image source={kargoButton} style={styles.image} resizeMode="contain" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo_image: {
    width: 180,
    height: 180,
  },
});
