import React from "react";
import "./global.css";
import { StyleSheet, ScrollView, View } from "react-native";
import GalaxySlider from "./components/Slider/GalaxySlider";

export default function App() {
  return (
    <View style={{ backgroundColor: "black", marginTop: 100 }}>
      <GalaxySlider
        size="large"
        minValue={0}
        maxValue={200}
        defaultValue={100}
        step={5}
        // trackColor="bg-blue-200"
        // filledColor="bg-red-500"
        // thumbColor="bg-yellow-300"
        onValueChange={(value) => console.log(value)}
      />
    </View>
    //     <ScrollView style={styles.container} className="font-sans">
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
