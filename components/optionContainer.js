import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const OptionContainer = ({ ImageSource, Title, Subtitle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.mainContainer}>
      <View style={styles.container}>
        <View style={styles.leftContent}>
          <Text style={styles.title}>{Title}</Text>
          <Text style={styles.info}>{Subtitle}</Text>
        </View>
        <View style={styles.rightContent}>
          <Image source={ImageSource} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    marginTop: 15,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 16,
    shadowColor: "#C0C0C0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 1,
    shadowRadius: 13.16,
    elevation: 20,
  },
  leftContent: {
    flex: 1,
    marginRight: "auto", // Sağa boşluk bırak
  },
  rightContent: {
    marginLeft: "auto", // Sola boşluk bırak
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 0.6,
  },
  info: {
    fontSize: 11,
  },
});

export default OptionContainer;
