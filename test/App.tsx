import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import GalaxySpinner from "./components/Spinner/GalaxySpinner";
import EarthSpinner from "./components/Spinner/EarthSpinner";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxySpinner />
      <EarthSpinner />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
