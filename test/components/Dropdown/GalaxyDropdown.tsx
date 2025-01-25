import React, { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const options = ["Galaxy Dropdown", "Nebula Dropdown", "Earth Dropdown"];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Choose an option</Text>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        style={[styles.button, isOpen ? styles.roundedTop : styles.roundedFull]}
      >
        <Text style={styles.buttonText}>
          {selectedOption || "Select an option"}
        </Text>
        <Text style={styles.icon}>{isOpen ? "▲" : "▼"}</Text>
      </Pressable>
      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleOptionClick(item)}
                style={styles.option}
              >
                <Text style={styles.optionText}>{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    alignSelf: "center",
    marginTop: 50,
  },
  label: {
    fontSize: 16,
    color: "#4A4A4A",
    marginBottom: 8,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  roundedTop: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  roundedFull: {
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  icon: {
    fontSize: 16,
    color: "#4A4A4A",
  },
  dropdown: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    maxHeight: 150,
    marginTop: 8,
  },
  option: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#4A4A4A",
  },
});

export default Dropdown;
