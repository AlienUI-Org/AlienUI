import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";
import MarsCard from "./components/Card/MarsCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <MarsCard />{" "}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
