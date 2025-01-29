import React from "react";
import { StyleSheet, ScrollView, Image } from "react-native";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Image source={require("./assets/icon/card.svg")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
