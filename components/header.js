import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Seperator from "../assets/viewSeperatorDesign.png";

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
  },
});

const HeaderArea = () => {
  return (
    <View>
      <View style={styles.header}></View>
      <Image source={Seperator} style={styles.seperator} />
    </View>
  );
};

export default HeaderArea;
