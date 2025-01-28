import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyTable from "./components/Table/GalaxyTable";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyTable />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
