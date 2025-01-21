import { StyleSheet, Text, View } from "react-native";
import React from "react";

const EarthTab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View>
          <Text style={styles.text}>Home</Text>
        </View>
        <View>
          <Text style={styles.text}>Contacts</Text>
        </View>
        <View>
          <Text style={styles.text}>Cart</Text>
        </View>
        <View>
          <Text style={styles.text}>Chart</Text>
        </View>
        <View>
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  iconContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 4,
    paddingVertical: 16,
    backgroundColor: "#ba8463",
  },
  text: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
export default EarthTab;
