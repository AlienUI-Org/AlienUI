import { StyleSheet, ScrollView } from "react-native";
import GalaxyDropdown from "./components/Dropdown/GalaxyDropdown";
import GalaxySwitch from "./components/Switch/GalaxySwitch";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyDropdown />
      <GalaxySwitch />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
