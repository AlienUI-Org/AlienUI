import { StyleSheet, ScrollView } from "react-native";
import GalaxyStep from "./components/Step/GalaxyStep";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyStep />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
