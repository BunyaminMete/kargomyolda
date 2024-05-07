import React, { useRef } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";

const VerticalSlider = ({ children, isVisible, onClose }) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  const slideIn = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => onClose());
  };

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <View style={[styles.container, { display: isVisible ? "flex" : "none" }]}>
      <TouchableOpacity
        style={styles.overlay}
        onPress={slideOut}
        activeOpacity={1}
      />
      <Animated.View style={[styles.slider, { transform: [{ translateY }] }]}>
        {children}
      </Animated.View>
    </View>
  );
};

export default VerticalSlider;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  slider: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
