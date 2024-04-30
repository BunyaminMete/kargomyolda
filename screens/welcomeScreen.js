import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

import welcomeLogo from "../assets/kargoBeyazLogo.png";
import kargomYolda from "../assets/kargomyoldaText_Siyah.png";
import textUnderlineDesign from "../assets/welcomeScreen_ellipsetasarım.png";
import seperatorImage from "../assets/viewSeperatorDesign.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  welcomeTop: {
    backgroundColor: "#2AA2E6",
    height: "60%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeLogo: { marginTop: "25%" },
  welcomeLogo2: { marginTop: "4%", marginBottom: "4%" },
  welcomeLogo3: {},
  seperator: {
    width: "100%",
    borderRadius: 50,
    position: "absolute",
    top: "59%",
    zIndex: 2,
  },
  boldText: {
    fontWeight: "800",
  },
  welcomeContainer: {
    // backgroundColor: "blue",
    height: 70,
    marginTop: "10%",
    justifyContent: "center",
  },
  welcomeInfo: {
    // backgroundColor: "red",
    height: 60,
    letterSpacing: 0.3,
    fontStyle: "italic",
  },
  button: {
    padding: 18,
    backgroundColor: "#2AA2E6",
    alignItems: "center",
    borderRadius: 14,
    marginTop: "5%",
  },
});

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.welcomeTop}>
        <Image source={welcomeLogo} style={styles.welcomeLogo} />
        <Image source={kargomYolda} style={styles.welcomeLogo2} />
        <Image source={textUnderlineDesign} style={styles.welcomeLogo3} />
      </View>
      <Image source={seperatorImage} style={styles.seperator} />

      <View>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeInfo}>
            <Text style={styles.boldText}>Hoş Geldiniz{"\n"}</Text>
            <Text>Hizmetlerimize erişebilmek için lütfen giriş yapınız.</Text>
          </Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 18, color: "white" }}>Müşteri Girişi</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontSize: 18, color: "white" }}>Kurye Girişi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;
