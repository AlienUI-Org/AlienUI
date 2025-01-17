import { StyleSheet, ScrollView } from "react-native";
import GalaxyAccordion from "./components/Accordion/GalaxyAccordion";
import GalaxyPagination from "./components/Pagination/GalaxyPagination";
import MarsPagination from "./components/Pagination/MarsPagination";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyAccordion />
      <GalaxyPagination />
      <MarsPagination />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
