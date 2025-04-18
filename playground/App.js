import { StyleSheet, ScrollView } from "react-native";
import "./global.css";

export default function App() {
  return (
    <ScrollView
      style={styles.container}
      className="font-sans bg-black h-screen"
    ></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
