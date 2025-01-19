import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Card = () => {
  return (
    <View style={styles.card}>
      <Image
        source={require("../../assets/images/alien1.avif")}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.date}>07th July 1997</Text>
        <TouchableOpacity>
          <Text style={styles.title}>
            Exploring the Unknown: The Alien Encounter Chronicles
          </Text>
        </TouchableOpacity>
        <Text style={styles.description}>
          Deep in the vastness of space lies a story untold—of strange beings,
          otherworldly landscapes, and encounters that defy imagination.
          Discover the mysteries of alien civilizations, their technology, and
          the secrets they carry across galaxies.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    margin: 16,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
  date: {
    fontSize: 12,
    color: "#6b7280",
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111827",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    lineHeight: 20,
  },
});

export default Card;
