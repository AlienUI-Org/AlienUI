import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";

const { width } = Dimensions.get("window");

const Popover = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen((prev) => !prev);
  };

  const closePopover = () => {
    setIsOpen(false);
  };

  return (
    <TouchableWithoutFeedback onPress={closePopover}>
      <View style={styles.container}>
        <Pressable style={styles.button} onPress={togglePopover}>
          <Text style={styles.buttonText}>Toggle Popover</Text>
        </Pressable>

        {isOpen && (
          <TouchableWithoutFeedback>
            <View style={styles.overlay}>
              <View style={styles.popover}>
                <Text style={styles.popoverText}>This is a Galaxy Popover</Text>
                <Text style={styles.popoverSubtext}>
                  You can put any content here.
                </Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  overlay: {
    position: "absolute",
    bottom: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "100%",
    marginBottom: -60,
  },
  popover: {
    width: width * 0.6,
    height: "auto",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 4,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  popoverText: {
    fontSize: 16,
  },
  popoverSubtext: {
    fontSize: 14,
    color: "#666",
    marginTop: 10,
  },
});

export default Popover;
