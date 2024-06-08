import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const ProductList = ({ navigateTo, packageInfo, packagePrice }) => {
  // Kargo paketlerini temsil eden dizi

  return (
    <ScrollView horizontal style={styles.container}>
      {packageInfo.map((item, index) => (
        <TouchableOpacity
          onPress={navigateTo}
          key={index}
          style={styles.productContainer}
        >
          {Object.entries(item).map(([key, value]) => (
            <View key={key} style={styles.infoContainer}>
              <Text style={styles.productName}>{key}</Text>
              <Text style={styles.productValue}>{value}</Text>
            </View>
          ))}
          {/* Sepete Ekle butonu */}
          {packagePrice && (
            <View style={styles.infoContainer}>
              <Text style={styles.productPrice}>{packagePrice} TL</Text>
              <TouchableOpacity style={styles.addToCartButton}>
                <Text style={styles.buttonText}>Sepete Ekle</Text>
              </TouchableOpacity>
            </View>
          )}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row", // Yatay yönde sıralama
    marginTop: 5,
  },
  productContainer: {
    width: 190,
    height: 220,
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 10,
    padding: 10,
    justifyContent: "space-between", // İçerikleri dikey olarak hizalamak için
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
  productName: {
    fontWeight: "700",
    fontSize: 12,
  },
  productValue: { fontWeight: "bold" },
  addToCartButton: {
    backgroundColor: "#2AA2E6",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    alignSelf: "stretch",
  },
  productPrice: {
    fontWeight: "900",
    fontSize: 18,
    color: "#2AA2E6",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductList;
