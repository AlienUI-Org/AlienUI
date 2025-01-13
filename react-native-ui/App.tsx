import { StyleSheet, View } from "react-native";
import GalaxyButton from "./components/Button/GalaxyButton";
import EarthButton from "./components/Button/EarthButton";
import Input from "./components/Input/NebulonInput";
import EarthInput from "./components/Input/EarthInput";
import GalaxyBadge from "./components/Badge/GalaxyBadge";
import Alert from "./components/Alert/GalaxyAlert";
import KrytharWailAlert from "./components/Alert/KrytharWailAlert";
import GalaxyAvatar from "./components/Avatar/GalaxyAvatar";

export default function App() {
  return (
    <View style={styles.container}>
      <GalaxyButton />
      <EarthButton />
      <Input />
      <EarthInput />
      <GalaxyBadge />
      <Alert />
      <KrytharWailAlert />
      <GalaxyAvatar />
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
