import { StyleSheet, ScrollView } from "react-native";
import "./global.css";
import Button from "./components/comp1/Button";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Button />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
