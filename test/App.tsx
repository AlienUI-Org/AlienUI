import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import {default as JupiterTab} from './components/Tab/JupiterTab'


export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <JupiterTab/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
