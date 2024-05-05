import { View, StyleSheet, Image, Text } from "react-native";
import miniApplogo from "../assets/bluelogo.png";

const InfoContainer = ({ bottomInfoText }) => {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.subContainer}>
          <View style={styles.innerContainer}>
            <Image style={styles.miniAppLogo} source={miniApplogo} />
            <View style={styles.textContainer}>
              <View style={{ alignItems: "center" }}>
                <Text style={styles.welcomeText}>Hoş geldiniz !</Text>
              </View>
              <Text style={styles.bottomText}>{bottomInfoText}</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default InfoContainer;

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    // height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  subContainer: {
    marginTop: 50,
    margin: 10,
  },
  innerContainer: {
    flexDirection: "row",
    margin: 10,
    marginBottom: 0,
  },
  textContainer: {
    padding: 10,
    paddingTop: 15,
    marginLeft: 10,
    width: 300,
  },
  welcomeText: {
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  miniAppLogo: {},
  bottomText: {
    fontSize: 12,
    width: 300,
    alignSelf: "center",
    textAlign: "center",
  },
});
