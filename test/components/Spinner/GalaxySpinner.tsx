import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const Spinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);

      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start((finished) => {
        if (finished) {
          spin();
        }
      });
    };

    spin();

    return () => {
      spinValue.stopAnimation();
    };
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.spinner, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: 48,
    height: 48,
    borderWidth: 4,
    borderColor: "#634029",
    borderTopColor: "transparent",
    borderRadius: 25,
  },
});

export default Spinner;
