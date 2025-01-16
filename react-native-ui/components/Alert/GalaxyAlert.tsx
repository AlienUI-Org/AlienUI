import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Alert = () => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.contentContainer}>
        <Feather name="check-circle" size={24} color="#16a34a" />
        <View style={styles.textContainer}>
          <Text style={styles.alertTitle}>Zeltron Whisper</Text>
          <Text style={styles.alertMessage}>Everything is on track </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    padding: 16,
    width: 250,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
  },
  textContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  alertMessage: {
    marginTop: 4,
    fontSize: 14,
    color: "#374151",
  },
  dismissButton: {
    alignSelf: "center",
  },
});

export default Alert;
