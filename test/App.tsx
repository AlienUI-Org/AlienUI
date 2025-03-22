import React from "react";
import "./global.css";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import GalaxyModal from "./components/Modal/GalaxyModal";
import SearchBar from "./components/Search Bar/GalaxySearchBar";

export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <View style={{ marginTop: 200 }}>
        <SearchBar />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
