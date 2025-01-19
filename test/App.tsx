import { StyleSheet, ScrollView } from "react-native";
import GalaxyTab from "./components/Tab/GalaxyTab";
import EarthTab from "./components/Tab/EarthTab";
import GalaxyCard from "./components/Card/GalaxyCard";
import JupiterCard from "./components/Card/JupiterCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyTab />
      <EarthTab />
      <GalaxyCard />
      <JupiterCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
