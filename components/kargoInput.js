import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const PackageInput = ({ leftTitle, rightTitle }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <View style={styles.subContainer}>
            <Text style={styles.textContainer}>{leftTitle}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.textContainer}>{rightTitle}</Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default PackageInput;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    width: 360,
    // height: 46,
    marginLeft: 10,
  },
  subContainer: {
    backgroundColor: "#2AA2E6",
    padding: 10,
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  inputContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textContainer: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    width: 120,
  },
});
