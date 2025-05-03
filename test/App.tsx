import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import "./global.css";
import { StyleSheet, ScrollView } from "react-native";
import Spinner from "./components/Spinner";

export default function App() {
  return (
    <GluestackUIProvider mode="light">
      <ScrollView style={styles.container} className="font-sans">
        <Spinner />
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
