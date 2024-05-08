import React, { useRef, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Animated } from "react-native";

const VerticalSlider = ({ children, isVisible, onClose }) => {
  const slideAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => onClose());
    }
  }, [isVisible, onClose, slideAnimation]);

  const translateY = slideAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
  });

  const handleOverlayPress = () => {
    if (isVisible) {
      onClose();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.overlay}
        onPress={handleOverlayPress}
        activeOpacity={1}
        pointerEvents={isVisible ? "auto" : "none"}
      />
      <Animated.View
        style={[styles.slider, { transform: [{ translateY }] }]}
        pointerEvents={isVisible ? "auto" : "none"}
      >
        {children}
      </Animated.View>
    </View>
  );
};

export default VerticalSlider;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "absolute",
    width: "100%",
    top: 0,
    height: 1200,
  },
  overlay: {
    margin: 50,
  },
  slider: {
    backgroundColor: "#FFFFFF",
    marginTop: "80%",
    width: "100%",
    height: 500,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
});
