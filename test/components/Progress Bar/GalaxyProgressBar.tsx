import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFilled}></View>
      </View>
      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <FontAwesome name="info-circle" size={24} color="black" />
        </View>
        <View style={styles.step}>
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        </View>
        <View style={styles.step}>
          <AntDesign name="creditcard" size={24} color="#A1A1AA" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
  },
  progressBarFilled: {
    height: "100%",
    width: "50%",
    backgroundColor: "#000000",
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  step: {
    alignItems: "center",
    flex: 1,
  },
});

export default ProgressBar;
