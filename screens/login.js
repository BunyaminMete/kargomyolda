import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import HeaderArea from "../components/header";

import AppLogo from "../assets/kargoMaviLogo.png";
import KargomYoldaText from "../assets/kargomyoldaText_Siyah.png";
import EllipseHighlight from "../assets/ellipse_gri.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center", //Updating soon.
    // alignItems: "center",
  },
});

const UserLoginScreen = () => {
  return (
    <>
      <View style={styles.container}>
        <HeaderArea />

        <View>
          <Image source={AppLogo} />
          <Image source={KargomYoldaText} />
          <Image source={EllipseHighlight} />
        </View>
      </View>
    </>
  );
};

export default UserLoginScreen;
