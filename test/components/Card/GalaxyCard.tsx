import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const GalaxyCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="barschart" size={24} color="#ba8463" />
        </View>
        <Text style={styles.text}>Bar chart showing energy usage</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  cardContainer: {
    width: "60%",
    height: 170,
    borderRadius: 20,
    backgroundColor: "#fdf8f6",
    padding: 18,
  },
  iconContainer: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    color: "#24150b",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default GalaxyCard;
