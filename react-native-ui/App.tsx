import { StyleSheet, ScrollView } from "react-native";
import GalaxyButton from "./components/Button/GalaxyButton";
import EarthButton from "./components/Button/EarthButton";
import Input from "./components/Input/NebulonInput";
import EarthInput from "./components/Input/EarthInput";
import GalaxyBadge from "./components/Badge/GalaxyBadge";
import Alert from "./components/Alert/GalaxyAlert";
import KrytharWailAlert from "./components/Alert/KrytharWailAlert";
import GalaxyAvatar from "./components/Avatar/GalaxyAvatar";
import GalaxyCheckbox from "./components/Checkbox/GalaxyCheckbox";
import GalaxyBreadcrumb from "./components/BreadCrumbs/GalaxyBreadcrumb";
import EarthBreadcrumb from "./components/BreadCrumbs/EarthBreadcrumb";
import GalaxyAccordion from "./components/Accordion/GalaxyAccordion";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <GalaxyButton />
      <EarthButton />
      <Input />
      <EarthInput />
      <GalaxyBadge />
      <Alert />
      <KrytharWailAlert />
      <GalaxyAvatar />
      <GalaxyCheckbox />
      <GalaxyBreadcrumb />
      <EarthBreadcrumb />
      <GalaxyAccordion />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
