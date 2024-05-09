import React from "react";
import { View, Image, TouchableOpacity, StyleSheet, Text } from "react-native";

import deliveryLogo from "../assets/deliveryPack.png";

const PackageStatus = ({
  onPress,
  receiver,
  packageAmount,
  price,
  kuryePrice,
}) => {
  return (
    <View style={styles.container}>
      {/* Sol Container */}
      <View style={styles.leftContainer}>
        {/* Logo Container */}
        <View style={styles.logoContainer}>
          <Image source={deliveryLogo} style={styles.logo} />
        </View>

        {/* Bilgi Container */}
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{receiver}</Text>
          {packageAmount && (
            <Text style={styles.infoText}>{packageAmount} paket</Text>
          )}
          {kuryePrice && (
            <Text style={styles.infoText}>Ücret : {kuryePrice} TL</Text>
          )}
        </View>
      </View>

      {/* Sağ Container */}
      <View style={styles.rightContainer}>
        <Text style={styles.priceText}>{price}</Text>
        {packageAmount && (
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Yolda</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default PackageStatus;

const styles = StyleSheet.create({
  container: {
    height: 140,
    flexDirection: "row",
    borderBottomWidth: 0.2,
    borderBottomColor: "grey",
  },
  leftContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  logoContainer: {
    marginLeft: 40,
    padding: 10,
    backgroundColor: "#FFC0CB",
    borderRadius: 10,
  },
  logo: {
    width: 50,
    height: 50,
  },
  infoContainer: {
    marginLeft: 20,
  },
  infoText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    marginRight: 20,
  },
  priceText: {
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    marginTop: 5,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#68B7F1",
    borderRadius: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
});
