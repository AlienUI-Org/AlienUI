import { StyleSheet, ScrollView } from "react-native";
import GalaxyPopover from "./components/Popover/GalaxyPopover";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyPopover />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
