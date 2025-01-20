import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarBackground}>
        <View style={styles.progressBarFilled}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  progressBarBackground: {
    marginTop: 16,
    height: 8,
    borderRadius: 9999,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressBarFilled: {
    height: "100%",
    width: "66.6667%",
    borderRadius: 9999,
    backgroundColor: "#3B82F6",
  },
});

export default ProgressBar;
