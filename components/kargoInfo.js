import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import deliveryLogo from "../assets/deliveryPack.png";
import closeIcon from "../assets/closeIcon.png";
import PackageInput from "./kargoInput";

const PackageMoreInfo = ({ onPress }) => {
  return (
    <View>
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
      <View style={{ marginTop: 20 }}>
        <PackageInput leftTitle="Alıcı" />
        <PackageInput leftTitle="Gönderi Sahibi" />
        <PackageInput leftTitle="Teslimat Adresi" />
        <PackageInput leftTitle="Teslimat Tarihi" />
        <PackageInput leftTitle="Teslimat Saati" />
        <PackageInput leftTitle="Kargo Detayları" />
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
