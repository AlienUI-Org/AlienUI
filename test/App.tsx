import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyTable from "./components/Table/GalaxyTable";
import GalaxyToast from "./components/Toast/GalaxyToast";
import EarthToast from "./components/Toast/EarthToast";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <EarthToast />
      <EarthToast />
      <EarthToast />
      <EarthToast />
      <EarthToast />
      <EarthToast />
      <EarthToast />
      <EarthToast />
      <EarthToast />

      <GalaxyToast />
      <EarthToast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
