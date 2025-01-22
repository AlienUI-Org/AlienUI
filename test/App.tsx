import { StyleSheet, ScrollView } from "react-native";
import GalaxyPagination from "./components/Pagination/GalaxyPagination";
export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyPagination />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
