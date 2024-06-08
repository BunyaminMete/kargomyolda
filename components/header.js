import React from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native"; // navigation importu

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

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
    top: "65%",
    left: "36%",
  },
  kargomyolda: {
    width: 110,
    height: 30,
    top: 5,
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
  logoutButton: {
    fontSize: 14,
    padding: 7,
    color: "black",
  },
  logoutContainer: {
    borderRadius: 20,
    backgroundColor: "white",
    width: 70,
  },
  logoutContainerr: {
    borderRadius: 20,
    backgroundColor: "white",
    width: 70,
    right: -150,
    top: -20,
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

  const navigation = useNavigation(); // navigation hook

  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Oturumu kapatıldı, gerektiğinde kullanıcıyı yönlendirin veya başka bir işlem yapın
        console.log("Kullanıcı başarıyla çıkış yaptı.");
        // Örneğin, kullanıcıyı ana sayfaya yönlendirebilirsiniz
        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Kullanıcı çıkış yaparken bir hata oluştu:", error);
      });
  };

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
            <View style={styles.logoutContainerr}>
              <TouchableOpacity
                style={styles.logoutContainer}
                onPress={handleLogout}
              >
                <Text style={styles.logoutButton}>Çıkış Yap</Text>
              </TouchableOpacity>
            </View>
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
