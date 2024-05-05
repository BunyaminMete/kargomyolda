import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";

const DualButtonContainer = ({ BelgeLabel }) => {
  const handleUpload = () => {
    // Fotoğraf yükleme işlevi burada gerçekleştirilecek
    // Database yoksa sadece bir mesaj gösterilebilir veya işlevsiz bırakılabilir
    alert("Fotoğraf yükleme işlevi henüz mevcut değil.");
  };

  const handleSavePhoto = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert("Galeri izni reddedildi.");
      return;
    }

    try {
      const image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        quality: 1,
      });

      if (image) {
        if (image.cancelled) {
          // Kullanıcı fotoğraf seçme işlemini iptal etti
          Alert.alert("Fotoğraf seçme işlemi iptal edildi.");
        } else {
          // Fotoğraf seçildi ve işlem iptal edilmediyse
          if (image.uri) {
            const directory = `${FileSystem.documentDirectory}photos`;
            await FileSystem.makeDirectoryAsync(directory, {
              intermediates: true,
            });
            const fileName = `photo_${Date.now()}.jpg`;
            const newPath = `${directory}/${fileName}`;
            await FileSystem.copyAsync({ from: image.uri, to: newPath });
            Alert.alert("Fotoğraf başarıyla kaydedildi:", newPath);
          } else {
            // URI değeri eksik
            Alert.alert("Fotoğraf URI değeri eksik.");
          }
        }
      } else {
        // Seçilen fotoğraf bilgileri eksik
        Alert.alert("Seçilen fotoğraf bilgileri eksik.");
      }
    } catch (error) {
      Alert.alert("Fotoğraf kaydedilirken hata oluştu:", error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={true}
        style={[styles.button, styles.disabledButton]}
      >
        <Text style={styles.buttonText}>{BelgeLabel}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.uploadButton} onPress={handleSavePhoto}>
        <Text style={styles.uploadText}>Yükle</Text>
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
    paddingVertical: 0,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#D1D1D1",
    paddingHorizontal: 10,
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
    fontSize: 14,
    letterSpacing: 0.6,
    fontWeight: "bold",
    width: 120,
    textAlign: "center",
  },
  uploadText: {
    color: "white",
    fontWeight: "500",
    fontSize: 12,
    letterSpacing: 0.6,
  },
  disabledButton: {
    opacity: 1,
  },
});
