import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";

import Seperator from "../assets/viewSeperatorDesign.png";
import vector from "../assets/vector.png";

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    backgroundColor: "#2AA2E6",
  },
  seperator: {
    width: "100%",
    height: 10,
    position: "absolute",
    bottom: "-5%",
    borderRadius: 10,
    zIndex: 1,
  },
  kargomyoldaContainer: {
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "60%",
    left: "36%",
  },
  kargomyolda: {
    width: 110,
    height: 30,
  },
  titleContainer: {
    width: "100%",
    flexDirection: "row",
    height: 50,
    marginTop: 90,
  },
  backButton: {
    width: 100,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 20,
    borderRadius: 100,
  },
  titlePage: {
    height: 40,
    padding: 6,
    marginLeft: 15,
    letterSpacing: 0.8,
    fontWeight: "400",
    fontSize: 22,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});

const HeaderArea = ({
  backgroundColor = "#2AA2E6",
  height = 70,
  onPress,
  source,
  turnBack,
  titleText,
}) => {
  const headerStyle = { ...styles.header, backgroundColor, height };
  return (
    <View>
      <View style={headerStyle}>
        {source && (
          <View style={styles.kargomyoldaContainer}>
            <Image
              source={source}
              style={styles.kargomyolda}
              resizeMode="contain"
            />
          </View>
        )}
        {turnBack && (
          <View style={styles.titleContainer}>
            <TouchableOpacity onPress={onPress} style={styles.backButton}>
              <Image source={vector} />
              <Text style={{ margin: 10, fontSize: 15 }}>Geri Dön</Text>
            </TouchableOpacity>
            <Text style={styles.titlePage}>{titleText}</Text>
          </View>
        )}
      </View>
      <Image source={Seperator} style={styles.seperator} />
    </View>
  );
};

export default HeaderArea;
