import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import Alert from "./components/Alert/KrytharWailAlert";

export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <Alert
        type="success"
        title="Success!"
        message="Everything is on track."
      />
      <Alert type="warning" title="Warning!" message="Check your settings." />
      <Alert type="failure" title="Error!" message="Something went wrong." />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
