import React from "react";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import Avatar from "./components/Avatar/EarthAvatar";
import {default as JupiterTab} from './components/Tab/JupiterTab'
import Tab from "./components/Tab/EarthTab";
import {default as GalaxyTab} from './components/Tab/GalaxyTab'

export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <Avatar />
      <JupiterTab/>
      {/* <Tab/>
      <GalaxyTab/> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
