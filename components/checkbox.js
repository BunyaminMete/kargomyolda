import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Checkbox from "expo-checkbox";

const CheckBoxComponent = ({
  value,
  style,
  onValueChange,
  color,
  checkboxText,
  underlinedText,
  onPress,
}) => {
  return (
    <>
      <View style={styles.checkboxContainer}>
        <Checkbox
          value={value}
          style={style}
          onValueChange={onValueChange}
          color={color}
        />
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.belgeLink}>{underlinedText}</Text>
        </TouchableOpacity>
        <Text style={{ marginLeft: "2%" }}>{checkboxText}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  belgeLink: {
    color: "#2AA2E6",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
});
export default CheckBoxComponent;
