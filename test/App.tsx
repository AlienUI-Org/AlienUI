import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyForm from "./components/Form/GalaxyForm";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <ScrollView
        style={styles.container}
        className="font-sans h-screen justify-center items-center"
      >
        <GalaxyForm />
      </ScrollView>
    </GluestackUIProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
