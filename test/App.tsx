import React from "react";
import "./global.css";
import { StyleSheet, View, ScrollView  } from "react-native";
import Avatar from "./components/Avatar/EarthAvatar";
import JupiterTab from './components/Tab/JupiterTab';


export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <Avatar />
      {/* Other components can be added here */}
      <View style={styles.flexGrow} />
      <JupiterTab />
    </ScrollView>
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
