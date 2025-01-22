import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.stepsContainer}>
          <View style={[styles.stepItem, styles.stepStart]}>
            <View style={[styles.stepIcon, styles.activeStep]}>
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text style={[styles.stepLabel, styles.activeLabel]}>Details</Text>
          </View>
          <View style={styles.stepItem}>
            <View style={[styles.stepIcon, styles.activeStep]}>
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text style={[styles.stepLabel, styles.activeLabel]}>Address</Text>
          </View>
          <View style={[styles.stepItem, styles.stepEnd]}>
            <View style={styles.stepIcon}>
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text style={styles.stepLabel}>Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  progressBar: {
    position: "relative",
    marginTop: 16,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: -16,
    left: 0,
    right: 0,
  },
  stepItem: {
    alignItems: "center",
    flex: 1,
  },
  stepStart: {
    alignItems: "flex-start",
  },
  stepEnd: {
    alignItems: "flex-end",
  },
  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#6B7280",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  activeStep: {
    backgroundColor: "#000000",
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },
  activeLabel: {
    color: "#000000",
  },
});

export default ProgressBar;
