import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import KargoInfoPairs from "./kargoDetayPair";

import deliveryLogo from "../assets/deliveryPack.png";
import closeIcon from "../assets/closeIcon.png";

const PackageMoreInfo = ({ onPress }) => {
  return (
    <View>
      {/* Slider sayfasının logo, başlık ve iconun bulunduğu kısım */}
      <View style={styles.container}>
        {/* Sol Container */}
        <View style={styles.leftContainer}>
          {/* Logo Container */}
          <View style={styles.logoContainer}>
            <Image source={deliveryLogo} style={styles.logo} />
          </View>

          {/* Bilgi Container */}
          <View style={styles.infoContainer}>
            <Text style={styles.infoText}>Paket detayları</Text>
            <TouchableOpacity onPress={onPress}>
              <Image
                style={{ margin: 10, marginTop: 24, marginLeft: 50 }}
                source={closeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/*  */}
      <View style={{ marginTop: 20 }}>
        <KargoInfoPairs leftTitle="Alıcı" rightTitle="Bünyamin Mete" />
        <KargoInfoPairs leftTitle="Gönderi Sahibi" rightTitle="Bilal Eser" />
        <KargoInfoPairs
          leftTitle="Teslimat Adresi"
          rightTitle="Bahçelievler/İstanbul"
        />
        <KargoInfoPairs leftTitle="Teslimat Tarihi" rightTitle="27.04.24" />
        <KargoInfoPairs leftTitle="Teslimat Saati" rightTitle="19.15" />
        <KargoInfoPairs
          leftTitle="Kargo Detayları"
          rightTitle="Ağırlık: 0.5 kg
                      Uzunluk: 0.35 m
                      Genişlik 0.25 m
                      Derinlik 0.25 m"
        />
      </View>
    </View>
  );
};

export default PackageMoreInfo;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    marginLeft: 20,
    padding: 10,
    backgroundColor: "#FFC0CB",
    borderRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    flexDirection: "row",
    marginLeft: 40,
    alignItems: "center",
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  //   button: {
  //     marginTop: 5,
  //     paddingVertical: 8,
  //     paddingHorizontal: 20,
  //     backgroundColor: "#68B7F1",
  //     borderRadius: 5,
  //   },
  //   buttonText: {
  //     color: "#FFFFFF",
  //     fontWeight: "bold",
  //   },
});
