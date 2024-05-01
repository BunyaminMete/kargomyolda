import { View, Text, StyleSheet } from "react-native";

import Checkbox from "expo-checkbox";

const CheckBoxComponent = ({
  value,
  style,
  onValueChange,
  color,
  checkboxText,
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
        <Text style={styles.checkboxText}>{checkboxText}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxText: {
    marginLeft: "2%",
  },
});
export default CheckBoxComponent;
