import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Alert = () => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertTitle}>Krythar Wail</Text>
      <Text style={styles.alertMessage}>
        Something is wrong. There is a critical error.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
    backgroundColor: "#fef2f2",
    padding: 16,
    marginTop: 10,
    width: 250,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#991b1b",
    marginBottom: 8,
  },
  alertMessage: {
    fontSize: 14,
    color: "#b91c1c",
    lineHeight: 15,
  },
});

export default Alert;
