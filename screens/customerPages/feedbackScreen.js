import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
  TouchableOpacity,
} from "react-native";
import HeaderArea from "../../components/header";

const FeedbackScreen = ({ navigation }) => {
  const [feedbackText, setFeedbackText] = useState("");

  const handleSubmitFeedback = () => {
    // Geri bildirimi işleme kodu buraya gelecek
    console.log("Geri bildirim:", feedbackText);
    // Örnek olarak, geri bildirimi sıfırla
    setFeedbackText("");
  };

  return (
    <>
      <HeaderArea
        turnBack={true}
        height={150}
        titleText="   Geri Bildirim"
        onPress={() => navigation.navigate("CustomerMain")}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            multiline
            placeholder="Geri bildiriminizi buraya yazın..."
            value={feedbackText}
            onChangeText={setFeedbackText}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmitFeedback}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Gönder</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 150,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    textAlignVertical: "top", // Metni yukarıdan başlat
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#2AA2E6",
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    width: 120,
    padding: 20,
    color: "#fff",
  },
});

export default FeedbackScreen;
