import { StyleSheet, ScrollView } from "react-native";
import "./global.css";
import TempScreen1 from "./screens/TempScreen1";

export default function App() {
  return <ScrollView style={styles.container}></ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
