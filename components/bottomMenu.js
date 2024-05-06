import React from "react";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import profileIcon from "../assets/bottomMenu/profile.png";
import searchIcon from "../assets/bottomMenu/search.png";
import cardIcon from "../assets/bottomMenu/creditcard.png";

const MenuContainer = ({}) => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    // Profil sayfasına gitmek için navigasyon işlemi
    navigation.navigate("MusteriProfil");
  };

  const handleSettingsPress = () => {
    // Ayarlar sayfasına gitmek için navigasyon işlemi
    navigation.navigate("Ayarlar");
  };

  const handlePaymentPress = () => {
    navigation.navigate("MusteriOdeme");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image source={profileIcon} style={styles.iconImages} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={searchIcon} style={styles.iconImages} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handlePaymentPress}>
        <Image source={cardIcon} style={styles.iconImages} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 60,
    width: "100%",
    backgroundColor: "white",
    marginTop: 30,
    height: 90,

    //container üst kısmı border tasarımı
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,
    elevation: 21,
  },

  iconImages: {
    width: 40,
    height: 40,
    marginTop: -10,
  },
});

export default MenuContainer;
