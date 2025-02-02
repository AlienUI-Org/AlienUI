import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyTab from "./components/Tab/GalaxyTab";
import EarthTab from "./components/Tab/EarthTab";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyTab />
      <EarthTab />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
