import { StyleSheet, ScrollView } from "react-native";
import GalaxyToast from "./components/Toast/GalaxyToast";
import EarthTab from "./components/Tab/EarthTab";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <EarthTab />
      <GalaxyToast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
