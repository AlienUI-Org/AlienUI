import { StyleSheet, ScrollView } from "react-native";
import GalaxyCard from "./components/Card/GalaxyCard";
import PlutoCard from "./components/Card/PlutoCard";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyCard />
      <PlutoCard />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
