import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const MarsCard = () => {
  return (
    <View style={styles.cont}>
      <View style={styles.container}>
        <View style={styles.currencySelector}>
          <Image
            source={require("../../assets/icon/flag.svg")}
            style={styles.icon}
          />
          <Text style={styles.currencyText}>USD</Text>
          <MaterialIcons name="keyboard-arrow-down" size={28} color="white" />
        </View>
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Account balance</Text>
          <Image
            source={require("../../assets/icon/eye.svg")}
            style={styles.icon}
          />
        </View>
        <Text style={styles.balanceAmount}>
          $150,000.<Text style={styles.balanceDecimal}>00</Text>
        </Text>
        <View style={styles.accountContainer}>
          <Image
            source={require("../../assets/icon/copy.svg")}
            style={styles.icon}
          />
          <Text style={styles.accountText}>0771224074</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Deposit</Text>
            <Image
              source={require("../../assets/icon/import.svg")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Transfer</Text>
            <Image
              source={require("../../assets/icon/export.svg")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    flex: 1,
    margin: 10,
  },
  container: {
    width: "100%",
    height: "auto",
    paddingVertical: 32,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    backgroundColor: "white",
  },
  currencySelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    padding: 8,
    borderRadius: 50,
    marginBottom: 16,
  },
  currencyText: {
    color: "white",
    fontSize: 16,
    marginLeft: 8,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  },
  balanceLabel: {
    fontSize: 16,
  },
  balanceAmount: {
    fontSize: 48,
    fontWeight: "bold",
    marginBottom: 16,
  },
  balanceDecimal: {
    fontSize: 36,
    color: "gray",
  },
  accountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    gap: 8,
  },
  accountText: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    borderRadius: 50,
    paddingVertical: 12,
    width: 160,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default MarsCard;
