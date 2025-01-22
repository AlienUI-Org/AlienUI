import { StyleSheet, ScrollView } from "react-native";
import EarthToast from "./components/Toast/EarthToast";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <EarthToast />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
