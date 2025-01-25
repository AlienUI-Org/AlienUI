import React, { useState } from "react";
import { StyleSheet, Animated, Pressable } from "react-native";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const translateX = new Animated.Value(isEnabled ? 20 : 0);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    Animated.timing(translateX, {
      toValue: isEnabled ? 0 : 20,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={[
        styles.switchContainer,
        { backgroundColor: isEnabled ? "#000000" : "#ccc" },
      ]}
      onPress={toggleSwitch}
    >
      <Animated.View
        style={[styles.switchKnob, { transform: [{ translateX }] }]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 55,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 2,
  },
  switchKnob: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
  },
});

export default Switch;
