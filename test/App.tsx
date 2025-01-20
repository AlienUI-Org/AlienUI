import { StyleSheet, ScrollView } from "react-native";
import GalaxyProgressBar from "./components/Progress Bar/GalaxyProgressBar";
import EarthProgressBar from "./components/Progress Bar/EarthProgressBar";
import MarsProgressBar from "./components/Progress Bar/MarsProgressBar";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyProgressBar />
      <EarthProgressBar />
      <MarsProgressBar />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
