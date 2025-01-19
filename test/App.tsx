import { StyleSheet, ScrollView } from "react-native";
import EarthCard from "./components/Card/EarthCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <EarthCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
