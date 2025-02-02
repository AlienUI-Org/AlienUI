import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyCard from "./components/Card/GalaxyCard";
import EarthCard from "./components/Card/EarthCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyCard />
      <EarthCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
