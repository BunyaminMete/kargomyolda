import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import Checkbox from "expo-checkbox";

import HeaderArea from "../components/header";

import AppLogo from "../assets/kargoMaviLogo.png";
import KargomYoldaText from "../assets/kargomyoldaText_Siyah.png";
import EllipseHighlight from "../assets/ellipse_gri.png";
import InputComponent from "../components/input";
import CheckBoxComponent from "../components/checkbox";
import SetButton from "../components/button";

import seperatorLogin from "../assets/hesabinyokmu.png";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center", //Updating soon.
    // alignItems: "center",
  },
  imagesContainer: {
    // backgroundColor: "yellow",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  blueAppLogo: { width: 112, height: 140 },
  yoldaText: {
    width: 200,
    height: 32,
    padding: 10,
  },
  ellipse: {
    width: 240,
    height: 10,
    marginTop: 16,
  },
});

const UserLoginScreen = () => {
  const [isChecked, setChecked] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <HeaderArea />

        <View style={styles.imagesContainer}>
          <Image
            style={styles.blueAppLogo}
            source={AppLogo}
            resizeMode="contain"
          />
          <Image
            style={styles.yoldaText}
            source={KargomYoldaText}
            resizeMode="contain"
          />
          <Image style={styles.ellipse} source={EllipseHighlight} />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "blue",
          }}
        >
          {/* Input Kapsayıcısı */}
          <View style={{ backgroundColor: "red" }}>
            <InputComponent placeholder="E-posta" />
            <InputComponent placeholder="Parola" uzaklik_ayarla={-10} />
            <CheckBoxComponent
              checkboxText="Beni hatırla"
              onValueChange={setChecked}
              value={isChecked}
            />
          </View>
          {/* Input Kapsayıcısı */}
          <View>
            <SetButton
              buttonStyle={{ backgroundColor: "#2AA2E6", marginTop: 40 }}
              buttonText="Giriş Yap"
            />
            <Image source={seperatorLogin}></Image>
          </View>
        </View>
      </View>
    </>
  );
};

export default UserLoginScreen;
