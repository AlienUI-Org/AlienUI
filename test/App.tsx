import { StyleSheet, ScrollView } from "react-native";
import GalaxyStep from "./components/Step/GalaxyStep";
import GalaxyTab from "./components/Tab/GalaxyTab";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyStep />
      <GalaxyTab />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
