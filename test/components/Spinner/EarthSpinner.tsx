import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

const Spinner = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const colors = ["black", "red", "blue", "green", "yellow"];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentColorIndex(index);
      index = (index + 1) % colors.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const colors = ["black", "red", "blue", "green", "yellow"];
  const currentColor = colors[currentColorIndex];

  return (
    <View style={styles.container}>
      <View style={[styles.spinner, { backgroundColor: currentColor }]} />
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
    borderRadius: 24,
  },
});

export default Spinner;
