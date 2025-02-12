import { StyleSheet, ScrollView } from "react-native";
import "./global.css";
import TempScreen2 from "./screens/TempScreen2";

export default function App() {
  return (
    <ScrollView style={styles.container} className="font-sans">
      <TempScreen2 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
