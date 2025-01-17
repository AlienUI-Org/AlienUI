import { StyleSheet, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.active}>
          <AntDesign name="home" size={24} color="#ba8463" />
        </View>
        <View>
          <AntDesign name="contacts" size={24} color="white" />
        </View>
        <View>
          <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
        <View>
          <AntDesign name="barschart" size={24} color="white" />
        </View>
        <View>
          <AntDesign name="setting" size={24} color="white" />
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
    borderRadius: 30,
    paddingVertical: 6,
    backgroundColor: "#ba8463",
  },
  active: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    color: "#ba8463",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab;
