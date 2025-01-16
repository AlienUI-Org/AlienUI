import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckBox = () => {
  return (
    <View style={styles.fieldset}>
      <Text style={styles.legend}>Checkboxes</Text>

      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} activeOpacity={0.7}>
          <View style={styles.checkbox}></View>
          <Text style={styles.label}>John Clapton</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} activeOpacity={0.7}>
          <View style={styles.checkbox}></View>
          <Text style={styles.label}>Peter Mayer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option} activeOpacity={0.7}>
          <View style={styles.checkbox}></View>
          <Text style={styles.label}>Eric King</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldset: {
    margin: 16,
  },
  legend: {
    position: "absolute",
    left: -9999,
    top: -9999,
    color: "transparent",
  },
  optionsContainer: {
    gap: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F2937",
  },
});

export default CheckBox;
