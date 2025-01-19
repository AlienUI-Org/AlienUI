import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

const Card = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/alien1.avif")}
        style={styles.imageBackground}
        imageStyle={styles.image}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.date}>07th July 1997</Text>
            <TouchableOpacity>
              <Text style={styles.title}>
                Exploring the Unknown: The Alien Encounter Chronicles
              </Text>
            </TouchableOpacity>
            <Text style={styles.description}>
              Deep in the vastness of space lies a story untold—of strange
              beings, otherworldly landscapes, and encounters that defy
              imagination. Discover the mysteries of alien civilizations, their
              technology, and the secrets they carry across galaxies.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: "80%",
  },
  imageBackground: {
    width: "100%",
    height: 350,
  },
  image: {
    resizeMode: "cover",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
    paddingVertical: 10,
    paddingHorizontal: 4,
  },
  content: {
    padding: 16,
  },
  date: {
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.9)",
  },
  title: {
    marginTop: 4,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    color: "rgba(255, 255, 255, 0.95)",
  },
});

export default Card;
