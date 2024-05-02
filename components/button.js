//updating soon.
//updating soon.
import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    padding: 20,
    width: 160,
    height: 60,
  },
});

const SetButton = ({ buttonStyle, buttonText }) => {
  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity style={[styles.button, buttonStyle]}>
        <Text style={styles.text}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SetButton;
