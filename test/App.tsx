import { StyleSheet, ScrollView } from "react-native";
import GalaxyProgressBar from "./components/Progress Bar/GalaxyProgressBar";
import GalaxyAccordion from "./components/Accordion/GalaxyAccordion";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyProgressBar />
      <GalaxyAccordion />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
