import { StyleSheet, ScrollView } from "react-native";
import GalaxyModal from "./components/Modal/GalaxyModal";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyModal />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
