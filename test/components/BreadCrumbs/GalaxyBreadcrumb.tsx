import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Breadcrumb = () => {
  return (
    <View style={styles.container} accessibilityLabel="Breadcrumb">
      <TouchableOpacity>
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>
      <Ionicons
        name="chevron-forward"
        size={12}
        color="gray"
        style={styles.separator}
      />
      <TouchableOpacity>
        <Text style={styles.linkText}>Nebula</Text>
      </TouchableOpacity>
      <Ionicons
        name="chevron-forward"
        size={12}
        color="gray"
        style={styles.separator}
      />
      <TouchableOpacity>
        <Text style={styles.linkText}>Galaxy</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    padding: 4,
  },
  separator: {
    marginHorizontal: 4,
    marginTop: 6,
  },
  linkText: {
    color: "gray",
    fontSize: 14,
    textDecorationLine: "none",
  },
});

export default Breadcrumb;
