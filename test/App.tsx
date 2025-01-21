import { StyleSheet, ScrollView } from "react-native";
import GalaxyToast from "./components/Toast/GalaxyToast";

export default function App() {
  return (
    <ScrollView style={styles.container}>
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
