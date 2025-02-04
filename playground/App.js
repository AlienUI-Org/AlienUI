import { StyleSheet, ScrollView } from "react-native";
import "./global.css";
import TempScreen1 from "./screens/TempScreen1";

export default function App() {
  return (
    <ScrollView className="bg-blue-50" style={styles.container}>
      <TempScreen1 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
