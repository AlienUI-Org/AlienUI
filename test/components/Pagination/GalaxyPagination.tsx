import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const GalaxyPagination = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="left" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageNumberButton}>
        <Text style={styles.pageNumberText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pageNumberButton, styles.activePage]}>
        <Text style={styles.activePageText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageNumberButton}>
        <Text style={styles.pageNumberText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageNumberButton}>
        <Text style={styles.pageNumberText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="right" size={10} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  arrowButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  pageNumberButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  activePage: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  pageNumberText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  activePageText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default GalaxyPagination;
