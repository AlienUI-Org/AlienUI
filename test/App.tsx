import { StyleSheet, ScrollView } from "react-native";
import EarthSpinner from "./components/Spinner/EarthSpinner";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <EarthSpinner />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
