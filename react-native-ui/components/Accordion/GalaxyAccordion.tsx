import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const accordionItems = [
    {
      title: "Is AlienUI a component library?",
      content:
        "Yes, It is a self-hosted component library but you do not install it as a dependency. It is not available via npm like other traditional component library. Pick the components you need. " +
        "Copy and paste the code into your project and customize to your needs. The code is yours.",
    },
    {
      title: "Why copy/paste and not packaged as a dependency?",
      content:
        "The goal is to give you full control over your components, enabling you to decide their structure and styling. By starting with sensible defaults, you can customize them to fit your needs. Unlike packaged npm components, where styles are tightly coupled to implementation, separating design from functionality ensures flexibility and adaptability.",
    },
    {
      title: "Do you plan to publish it as an npm package?",
      content: "No. We have no plans to publish it as an npm package.",
    },
    {
      title: "Which frameworks are supported?",
      content:
        "You can use any framework that supports React Native. Expo etc.",
    },
    {
      title: "Can I use this in my project?",
      content:
        "Yes, you can use AlienUI in your React Native project. The code is yours. But hey, let us know if you do. We'd love to see what you build.",
    },
    {
      title: "Do I need to credit AlienUI?",
      content:
        "No, crediting AlienUI is not necessary. However, giving the project a star on GitHub and/or sharing it on Twitter and LinkedIn would be appreciated.",
    },
    {
      title: "How can I support AlienUI?",
      content:
        "You can support AlienUI by starring the project on GitHub and/or sharing it on Twitter and LinkedIn. It helps increase the project's visibility.",
    },
    {
      title: "How do I contribute?",
      content:
        "You can contribute by adding new components, fixing bugs, or improving the documentation. Please create an issue before starting any work.",
    },
    {
      title: "How do I get updates?",
      content:
        "The best way to get updates is by following the project on GitHub and all social media platforms like Twitter, LinkedIn etc. You can also get latest updates by subscribing to our newsletter.",
    },
    {
      title: "Can I request new features for AlienUI?",
      content:
        "Yes, you can create a new issue on GitHub to request new features. While not every request will be implemented, they all will be considered.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.accordionContainer}>
        {accordionItems.map((item, index) => (
          <View key={index} style={styles.accordionItem}>
            <TouchableOpacity
              onPress={() => toggleAccordion(index)}
              style={styles.accordionHeader}
            >
              <Text style={styles.accordionTitle}>{item.title}</Text>
              <Text
                style={[styles.icon, openIndex === index && styles.iconOpen]}
              >
                ▼
              </Text>
            </TouchableOpacity>
            {openIndex === index && (
              <View style={styles.accordionContent}>
                <Text style={styles.contentText}>{item.content}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
  },
  accordionContainer: {
    width: "90%",
    overflow: "hidden",
  },
  accordionItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  accordionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 20,
    backgroundColor: "#f3eae4",
  },
  accordionTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
  icon: {
    fontSize: 16,
    color: "#000000",
    transform: [{ rotate: "0deg" }],
  },
  iconOpen: {
    transform: [{ rotate: "180deg" }],
  },
  accordionContent: {
    padding: 16,
    backgroundColor: "#fdf8f6",
  },
  contentText: {
    fontSize: 14,
    color: "#666",
  },
});

export default Accordion;
