import { StyleSheet, View } from "react-native";
import GalaxyButton from "./components/Button/GalaxyButton";
import EarthButton from "./components/Button/EarthButton";
import Input from "./components/Input/NebulonInput";
import EarthInput from "./components/Input/EarthInput";
import GalaxyBadge from "./components/Badge/GalaxyBadge";

export default function App() {
  return (
    <View style={styles.container}>
      <GalaxyButton />
      <EarthButton />
      <Input />
      <EarthInput />
      <GalaxyBadge />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    margin: 15,
  },
});
