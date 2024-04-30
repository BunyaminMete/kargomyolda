import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";

import splash_logo from "../assets/splashscreenLogo.png";
import kargoButton from "../assets/kargomyoldaButton.png";
import kargoText from "../assets/kargomyoldatext2.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={splash_logo}
        style={styles.logo_image}
        resizeMode="contain"
      />

      <ImageBackground
        source={kargoButton}
        style={styles.textContainer}
        resizeMode="contain"
      >
        <Image source={kargoText} style={styles.text} resizeMode="contain" />
      </ImageBackground>

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
    height: 240,
  },
  textContainer: {
    width: 280,
    height: 60,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 52,
    marginTop: 15,
  },
});
//Splash ekranı expo'nun app.js ayarında basit bir şekilde ayarlandı. Expo dışında bir cli kullanılırsa bu koda başvurulabilir.
