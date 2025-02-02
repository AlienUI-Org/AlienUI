import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";

export default function App() {
  return <ScrollView style={styles.container}></ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
