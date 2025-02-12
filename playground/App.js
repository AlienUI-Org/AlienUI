import { StyleSheet, ScrollView } from "react-native";
import "./global.css";

export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans"></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
