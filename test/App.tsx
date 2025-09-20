import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StyleSheet, ScrollView } from "react-native";
import GalaxyForm from "./components/Form/GalaxyForm";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <ScrollView
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        style={styles.container}
        className="font-sans h-screen"
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
