import { StyleSheet, ScrollView } from "react-native";
import GalaxyCarousel from "./components/Carousel/GalaxyCarousel";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyCarousel />{" "}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
