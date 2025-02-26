import React from "react";
import "./global.css";
import { StyleSheet, View } from "react-native";
import Avatar from "./components/Avatar/EarthAvatar";
import { default as JupiterTab } from './components/Tab/JupiterTab';
import Tab from "./components/Tab/EarthTab";
import { default as GalaxyTab } from './components/Tab/GalaxyTab';

export default function App() {
  return (
    <View style={styles.container} className="font-sans">
      <Avatar />
      {/* Other components can be added here */}
      <View style={styles.flexGrow} />
      <JupiterTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  flexGrow: {
    flex: 1,
  },
});
