import React, { useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const ProductList = ({ packageInfo, showButton }) => {
  const calculateShippingCost = (weight, width, height, depth) => {
    const shippingCost = (weight * (width + height + depth)) / 800; // Kargo ücreti hesaplama formülü
    return shippingCost;
  };

  const getRandomDistance = () => {
    const randomValue = Math.random(); // 0 ile 1 arasında bir değer
    const integerPart = Math.floor(randomValue * 10); // 0 ile 9 arasında bir tam sayı
    const decimalPart = Math.random() > 0.5 ? 0.5 : 0; // 0 veya 0.5 olacak şekilde ayarla
    return integerPart + decimalPart;
  };

  const handleAddToCart = async (item) => {
    try {
      // İlk olarak, mevcut dokümanı pastShipments koleksiyonuna ekle
      await firebase
        .firestore()
        .collection("pastShipments")
        .doc(item.id)
        .set({
          ...item,
        });

      // Ardından, shipments koleksiyonundan sil
      await firebase.firestore().collection("shipments").doc(item.id).delete();

      Alert.alert("Başarılı", "Kargo geçmişe taşındı!");
    } catch (error) {
      console.error("Error moving shipment to pastShipments:", error);
      Alert.alert("Hata", "Kargo geçmişe taşınırken bir hata oluştu.");
    }
  };

  return (
    <ScrollView horizontal style={styles.container}>
      {packageInfo.map((item, index) => (
        <View key={index} style={styles.productContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Sana Olan Uzaklık: </Text>
            <Text style={styles.productValue}>{getRandomDistance()} km</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Taşınacak Mesafe: </Text>
            <Text style={styles.productValue}>{getRandomDistance()} km</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Ağırlık: </Text>
            <Text style={styles.productValue}>{item.weight} kg</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Genişlik: </Text>
            <Text style={styles.productValue}>{item.width} m</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Uzunluk: </Text>
            <Text style={styles.productValue}>{item.length} m</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Derinlik: </Text>
            <Text style={styles.productValue}>{item.depth} m</Text>
          </View>

          {showButton && (
            <View style={styles.infoContainer}>
              <Text style={styles.productPrice}>
                {calculateShippingCost(
                  item.weight * 1000,
                  item.width * 10,
                  item.length * 10,
                  item.depth * 10
                )}
                TL
              </Text>
              <TouchableOpacity
                style={styles.addToCartButton}
                onPress={() => handleAddToCart(item)}
              >
                <Text style={styles.buttonText}>Paketi Al</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  productContainer: {
    width: 190,
    height: 220,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 14,
  },
  productValue: {
    fontSize: 14,
  },
  addToCartButton: {
    backgroundColor: "#2AA2E6",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "stretch",
  },
  productPrice: {
    fontWeight: "900",
    fontSize: 13,
    color: "#2AA2E6",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductList;
