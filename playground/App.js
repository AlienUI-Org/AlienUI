import { StyleSheet, ScrollView } from "react-native";
import "./global.css";
import TempScreen3 from "./screens/TempScreen3";

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      className="font-sans bg-black h-screen"
    >
      <TempScreen3 />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
