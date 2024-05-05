import react from "react";
import { View, TextInput, StyleSheet } from "react-native";

const defaultWidth = 360;

const InputComponent = ({
  placeholder,
  value,
  onChangeUpdateText,
  uzaklik_ayarla,
  width = defaultWidth,
}) => {
  return (
    <>
      <View
        style={{
          marginTop: uzaklik_ayarla,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={[styles.input, { width: width }]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeUpdateText}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 55,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#E9E9E9",
    padding: 20,
    borderRadius: 10,
    fontSize: 18,
  },
});

export default InputComponent;
