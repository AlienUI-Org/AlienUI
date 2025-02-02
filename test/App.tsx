import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyDropdown from "./components/Dropdown/GalaxyDropdown";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyDropdown />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
