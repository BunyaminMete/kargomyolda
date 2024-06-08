import React, { useState, useEffect } from "react";
import { View, Image, StyleSheet, Alert } from "react-native";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"; // onAuthStateChanged ekledik
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import HeaderArea from "../../components/header";
import InputComponent from "../../components/input";
import CheckBoxComponent from "../../components/checkbox";
import SetButton from "../../components/button";

import LocalData from "../data.json";

import AppLogo from "../../assets/kargoMaviLogo.png";
import KargomYoldaText from "../../assets/kargomyoldaText_Siyah.png";
import EllipseHighlight from "../../assets/ellipse_gri.png";
import seperatorLogin from "../../assets/hesabinyokmu.png";

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
  seperator: {
    marginTop: 20,
  },
});

const UserLoginScreen = ({ navigation }) => {
  const [isChecked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null); // Oturum durumu için state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      setUser(user); // Oturum durumunu güncelle
    });

    // Component kaldırıldığında listener'ı kaldır
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Oturum açık olduğunda direkt ana ekrana yönlendirme
    if (user) {
      navigation.navigate("CustomerMain");
    }
  }, [user, navigation]);

  const UserAuthenticator = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Oturum açma başarılı olduğunda onAuthStateChanged tarafından set edilecek
    } catch (error) {
      Alert.alert(error.message);
    }
  };

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
          }}
        >
          {/* Input Kapsayıcısı */}
          <View>
            <InputComponent
              placeholder="E-posta"
              value={email}
              onChangeText={(newValue) => setEmail(newValue)}
            />
            <InputComponent
              placeholder="Parola"
              uzaklik_ayarla={-10}
              value={password}
              onChangeText={(newValue) => setPassword(newValue)}
            />
            <CheckBoxComponent
              checkboxText="Beni hatırla"
              onValueChange={setChecked}
              value={isChecked}
            />
          </View>
          {/* Input Kapsayıcısı */}
          <View>
            <SetButton
              onPress={UserAuthenticator}
              buttonStyle={{ backgroundColor: "#2AA2E6", marginTop: 40 }}
              buttonText="Giriş Yap"
            />
            <Image style={styles.seperator} source={seperatorLogin}></Image>
            <SetButton
              buttonStyle={{ backgroundColor: "#38BF22", marginTop: 40 }}
              buttonText="Kayıt Ol"
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default UserLoginScreen;
