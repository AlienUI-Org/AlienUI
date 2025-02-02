import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import EarthBreadcrumb from "./components/BreadCrumbs/EarthBreadcrumb";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <EarthBreadcrumb />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
