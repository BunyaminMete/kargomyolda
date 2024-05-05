import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

const DualButtonContainer = ({ BelgeLabel }) => {
  const handleUpload = () => {
    // Fotoğraf yükleme işlevi burada gerçekleştirilecek
    // Database yoksa sadece bir mesaj gösterilebilir veya işlevsiz bırakılabilir
    alert("Fotoğraf yükleme işlevi henüz mevcut değil.");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={true}
        style={[styles.button, styles.disabledButton]}
      >
        <Text style={styles.uploadText}>{BelgeLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
        <Text style={styles.buttonText}>Yükle</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DualButtonContainer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: "#D1D1D1",
    paddingHorizontal: 45,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    maxWidth: 200,
  },
  uploadButton: {
    backgroundColor: "#2AA2E6",
    paddingHorizontal: 70,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    letterSpacing: 0.6,
    fontWeight: "500",
  },
  uploadText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 0.6,
  },
  disabledButton: {
    opacity: 1,
  },
});
