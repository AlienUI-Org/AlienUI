import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import SearchBar from "./components/Search Bar/GalaxySearchBar";
export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <SearchBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
