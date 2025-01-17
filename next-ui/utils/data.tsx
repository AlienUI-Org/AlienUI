"use client";
import { AlienUIIcons } from "./icons";
import { Comp } from "./comp";

type Variant = {
  name: string;
  description: string;
  code: string;
  code2: string;
  render: React.ReactNode;
};

type Component = {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  variants: Variant[];
};

type Components = {
  [key: string]: Component;
};

export const components: Components = {
  accordion: {
    id: 1,
    name: "Accordion",
    icon: AlienUIIcons.AlienRiAliensFill,
    description: "An accordion component",
    variants: [
      {
        name: "Galaxy Accordion",
        description: "A default galactic accordion",
        code: `import React, { useState } from "react";
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
`,
        code2: `import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

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
    <ScrollView className="flex-1">
      <View className="w-full">
        {accordionItems.map((item, index) => (
          <View key={index} className="border-b border-gray-300">
            <TouchableOpacity
              onPress={() => toggleAccordion(index)}
              className={\`flex flex-row justify-between items-center px-5 py-4 bg-[#f3eae4] \${openIndex === index ? "bg-[#fdf8f6]" : ""}\`}
            >
              <Text className="text-[16px] font-medium text-gray-800">
                {item.title}
              </Text>
              <Text
                className={\`text-[16px] transition-transform duration-300 \${
                  openIndex === index ? "rotate-180" : ""
                }\`}
              >
                ▼
              </Text>
            </TouchableOpacity>
            {openIndex === index && (
              <View className="px-5 py-4 bg-[#fdf8f6]">
                <Text className="text-sm text-gray-600">{item.content}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Accordion;
`,
        render: <Comp.GalaxyAccordion />,
      },
    ],
  },
  alert: {
    id: 2,
    name: "Alert",
    icon: AlienUIIcons.AlienBug,
    description: "An alert component with multiple types",
    variants: [
      {
        name: "Galaxy Alert",
        description: "An galactic alert for notifications",
        code: `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const Alert = () => {
  return (
    <View style={styles.alertContainer}>
      <View style={styles.contentContainer}>
        <Feather name="check-circle" size={24} color="#16a34a" />
        <View style={styles.textContainer}>
          <Text style={styles.alertTitle}>Zeltron Whisper</Text>
          <Text style={styles.alertMessage}>Everything is on track </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#e5e7eb",
    backgroundColor: "#ffffff",
    padding: 16,
    width: 250,
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 16,
  },
  textContainer: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#111827",
  },
  alertMessage: {
    marginTop: 4,
    fontSize: 14,
    color: "#374151",
  },
  dismissButton: {
    alignSelf: "center",
  },
});

export default Alert;
`,
        code2: `import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const Alert = () => {
  return (
    <View className="rounded-xl border border-gray-300 bg-white p-4 w-[250px]">
      <View className="flex flex-row items-start gap-4">
        <Feather name="check-circle" size={24} color="#16a34a" />
        <View className="flex-1">
          <Text className="text-lg font-medium text-gray-900">Zeltron Whisper</Text>
          <Text className="mt-1 text-sm text-gray-700">
            Everything is on track.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Alert;
`,
        render: <Comp.GalaxyAlert />,
      },
      {
        name: "Krythar Wail Alert",
        description:
          "An galactic alert for urgent and critical issues in the galaxy",
        code: `import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Alert = () => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertTitle}>Krythar Wail</Text>
      <Text style={styles.alertMessage}>
        Something is wrong. There is a critical error.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#ef4444",
    backgroundColor: "#fef2f2",
    padding: 16,
    width: 250,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#991b1b",
    marginBottom: 8,
  },
  alertMessage: {
    fontSize: 14,
    color: "#b91c1c",
    lineHeight: 15,
  },
});

export default Alert;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";

const Alert = () => {
  return (
    <View className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4 w-[250px]">
      <Text className="text-lg font-bold text-red-800">Krythar Wail</Text>
      <Text className="mt-1 text-sm text-red-700">
        Something is wrong. There is a critical error.
      </Text>
    </View>
  );
};

export default Alert;
`,
        render: <Comp.KrytharWailAlert />,
      },
    ],
  },
  avatar: {
    id: 3,
    name: "Avatar",
    icon: AlienUIIcons.AlienSkull,
    description: "A celestial avatar for profile representation",
    variants: [
      {
        name: "Galaxy Avatar",
        description: "An avatar for identification",
        code: `import React from "react";
import { View, Image, StyleSheet } from "react-native";

const Avatar = () => {
  return (
    <View style={styles.avatarContainer}>
      <Image
        source={require("../../assets/images/alien1.avif")}
        style={styles.avatarImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  avatarImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
});

export default Avatar;

`,
        code2: `import React from "react";
import { View, Image } from "react-native";

const Avatar = () => {
  return (
    <View className="w-16 h-16 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
      <Image
        source={require("../../assets/images/alien1.avif")}
        className="w-full h-full object-cover"
      />
    </View>
  );
};

export default Avatar;
`,
        render: <Comp.GalaxyAvatar />,
      },
    ],
  },
  badge: {
    id: 4,
    name: "Badge",
    icon: AlienUIIcons.AlienFire,
    description: "A customizable badge component with multiple variants",
    variants: [
      {
        name: "Galaxy Badge",
        description: "An alien badge for galactic identification",
        code: `import React from "react" ;
import { StyleSheet, Text, View } from "react-native";

const Badge = () => {
  return (
      <View style={styles.container}>
          <Text style={styles.text}>Badge</Text>
      </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 20,
    alignItems: "center",
    width: 80,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 12,
  },
});`,
        code2: `import React from 'react';
import { View, Text } from 'react-native'

const Badge = () => {
    return (
        <View className="bg-black px-2 py-1 rounded-full flex items-center justify-center w-[80px]">
            <Text className="text-white text-xs">Badge</Text>
        </View>
    )
}
    
export default Badge;
`,
        render: <Comp.GalaxyBadge />,
      },
    ],
  },
  breadcrumb: {
    id: 5,
    name: "Breadcrumb",
    icon: AlienUIIcons.AlienWiAlien,
    description:
      "A customizable breadcrumb component with different variants for navigation.",
    variants: [
      {
        name: "Galaxy Breadcrumb",
        description: "A breadcrumb for navigation, in the galaxy.",
        code: `import React from "react";
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
        color="black"
        style={styles.separator}
      />
      <TouchableOpacity>
        <Text style={styles.linkText}>Nebula</Text>
      </TouchableOpacity>
      <Ionicons
        name="chevron-forward"
        size={12}
        color="black"
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
`,
        code2: `import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Breadcrumb = () => {
  return (
    <View className="flex flex-row items-center">
      <TouchableOpacity>
        <Text className="text-gray-600 text-sm">Home</Text>
      </TouchableOpacity>
      <Ionicons
        name="chevron-forward"
        size={12}
        color="black"
        className="mx-1 mt-[6px]"
      />
      <TouchableOpacity>
        <Text className="text-gray-600 text-sm">Nebula</Text>
      </TouchableOpacity>
      <Ionicons
        name="chevron-forward"
        size={12}
        color="black"
        className="mx-1 mt-[6px]"
      />
      <TouchableOpacity>
        <Text className="text-gray-600 text-sm">Galaxy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Breadcrumb;
`,
        render: <Comp.GalaxyBreadcrumb />,
      },
      {
        name: "Earth Breadcrumb",
        description: "A breadcrumb for navigating on the earth surface.",
        code: `import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Breadcrumb = () => {
  return (
    <View style={styles.container} accessibilityLabel="Breadcrumb">
      <TouchableOpacity>
        <Text style={styles.linkText}>Home</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="slash-forward"
        size={12}
        color="black"
        style={styles.separator}
      />
      <TouchableOpacity>
        <Text style={styles.linkText}>Nebula</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="slash-forward"
        size={12}
        color="black"
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
  separator: {
    marginHorizontal: 4,
    marginTop: 4,
  },
  linkText: {
    color: "gray",
    fontSize: 14,
    textDecorationLine: "none",
  },
});

export default Breadcrumb;
`,
        code2: `import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Breadcrumb = () => {
  return (
    <View className="flex flex-row items-center">
      <TouchableOpacity>
        <Text className="text-gray-600 text-sm">Home</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="slash-forward"
        size={12}
        color="black"
        className="mx-1 mt-1"
      />
      <TouchableOpacity>
        <Text className="text-gray-600 text-sm">Nebula</Text>
      </TouchableOpacity>
      <MaterialCommunityIcons
        name="slash-forward"
        size={12}
        color="black"
        className="mx-1 mt-1"
      />
      <TouchableOpacity>
        <Text className="text-gray-600 text-sm">Galaxy</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Breadcrumb;`,
        render: <Comp.EarthBreadcrumb />,
      },
    ],
  },
  button: {
    id: 6,
    name: "Button",
    icon: AlienUIIcons.AlienReddit,
    description:
      "A customizable button component with multiple variants to suit different use cases.",
    variants: [
      {
        name: "Galaxy Button",
        description:
          "A button with a solid background, used for primary actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Galaxy Button</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: 200,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
    }
});

export default Button;
`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = () => {
    return (
        <TouchableOpacity className="bg-black py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Galaxy Button</Text>
        </TouchableOpacity>
    );
};

export default Button;`,
        render: <Comp.GalaxyButton />,
      },
      {
        name: "Earth Button",
        description: "A button with an icon, used for secondary actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Button = () => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>Earth Button</Text>
            <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#000000'
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        alignItems: 'center',
        width: 200,
        flexDirection: "row",
        justifyContent: "center,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginRight: 2,
    }
});

export default Button;
`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Button = () => {
    return (
        <TouchableOpacity className="bg-black border py-2 px-4 rounded-md flex flex-row items-center justify-center w-[200px]">
            <Text className="text-white text-base mr-1">Earth Button</Text>
            <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
        </TouchableOpacity>
    );
};

export default Button;`,
        render: <Comp.EarthButton />,
      },
    ],
  },
  checkbox: {
    id: 7,
    name: "Checkbox",
    icon: AlienUIIcons.AlienStare,
    description: "A customizable checkbox component with variants.",
    variants: [
      {
        name: "Galaxy Checkbox",
        description: "An intergalactic checkbox for cosmic forms.",
        code: `import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CheckBox = () => {
  return (
    <View style={styles.fieldset}>
      <Text style={styles.legend}>Checkboxes</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.option} activeOpacity={0.7}>
          <View style={styles.checkbox}></View>
          <Text style={styles.label}>John Clapton</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} activeOpacity={0.7}>
          <View style={styles.checkbox}></View>
          <Text style={styles.label}>Peter Mayer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} activeOpacity={0.7}>
          <View style={styles.checkbox}></View>
          <Text style={styles.label}>Eric King</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldset: {
    margin: 16,
  },
  legend: {
    position: "absolute",
    left: -9999,
    top: -9999,
    color: "transparent",
  },
  optionsContainer: {
    gap: 8,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  checkbox: {
    width: 20,
    height: 20,
    marginRight: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#D1D5DB",
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    fontWeight: "500",
    color: "#1F2937",
  },
});

export default CheckBox;
;
`,
        code2: `import React from "react";
import { View, Text, Pressable } from "react-native";

const CheckBox = () => {
  return (
    <View className="p-4">
      <Text className="sr-only">Checkboxes</Text>
      <View className="space-y-2">
        <Pressable className="flex flex-row items-center gap-4 p-2 rounded bg-white">
          <View className="w-5 h-5 border border-gray-300 rounded bg-white"></View>
          <Text className="text-base font-medium text-gray-900">John Clapton</Text>
        </Pressable>
        <Pressable className="flex flex-row items-center gap-4 p-2 rounded bg-white">
          <View className="w-5 h-5 border border-gray-300 rounded bg-white"></View>
          <Text className="text-base font-medium text-gray-900">Peter Mayer</Text>
        </Pressable>
        <Pressable className="flex flex-row items-center gap-4 p-2 rounded bg-white">
          <View className="w-5 h-5 border border-gray-300 rounded bg-white"></View>
          <Text className="text-base font-medium text-gray-900">Eric King</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CheckBox;
`,
        render: <Comp.GalaxyCheckbox />,
      },
    ],
  },
  input: {
    id: 8,
    name: "Input",
    icon: AlienUIIcons.AlienEgg,
    description: "A customizable input component for capturing user data.",
    variants: [
      {
        name: "Nebulon Input",
        description: "A simple input box for text entry.",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nebulon Input"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 250,
    },
    input: {
        borderWidth: 1,
        borderColor: '#000000',
        borderRadius: 5,
        padding: 10,
    },
});

export default Input;`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const Input = () => {
    return (
        <View>
            <TextInput
                className="border-1 border-black rounded-md p-2"
                placeholder="Nebulon Input"
            />
        </View>
    );
};

export default Input;`,
        render: <Comp.NebulonInput />,
      },
      {
        name: "Earth Input",
        description: "An input box with a bottom border.",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Earth Input"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 250,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000000',
        padding: 10,
    },
});

export default Input;`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const Input = () => {
    return (
        <View>
            <TextInput
                className="border-1 border-b border-b-black p-2"
                placeholder="Earth Input"
            />
        </View>
    );
};

export default Input;`,
        render: <Comp.EarthInput />,
      },
    ],
  },
  pagination: {
    id: 9,
    name: "Pagination",
    icon: AlienUIIcons.AlienCrackedAlienSkull,
    description: "A customizable pagination component.",
    variants: [
      {
        name: "Galaxy Pagination",
        description: "A default galactic pagination in the galaxy.",
        code: `import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagination = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="left" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageNumberButton}>
        <Text style={styles.pageNumberText}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.pageNumberButton, styles.activePage]}>
        <Text style={styles.activePageText}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageNumberButton}>
        <Text style={styles.pageNumberText}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.pageNumberButton}>
        <Text style={styles.pageNumberText}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="right" size={10} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  arrowButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  pageNumberButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  activePage: {
    backgroundColor: "#2563eb",
    borderColor: "#2563eb",
  },
  pageNumberText: {
    color: "#333",
    fontSize: 14,
    fontWeight: "500",
  },
  activePageText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});

export default Pagination;
`,
        code2: `import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagination = () => {
  return (
    <View className="flex-row gap-2">
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <AntDesign name="left" size={10} color="black" />
      </TouchableOpacity>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <Text className="text-gray-800 text-sm font-medium">1</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-blue-600 rounded bg-blue-600">
        <Text className="text-white text-sm font-medium">2</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <Text className="text-gray-800 text-sm font-medium">3</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <Text className="text-gray-800 text-sm font-medium">4</Text>
      </TouchableOpacity>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <AntDesign name="right" size={10} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;`,

        render: <Comp.GalaxyPagination />,
      },
      {
        name: "Mars Pagination",
        description: "Paginating to mars.",
        code: `import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagination = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="left" size={10} color="black" />
      </TouchableOpacity>
      <Text style={styles.pageText}>
        1<Text style={styles.divider}> / </Text>47
      </Text>
      <TouchableOpacity style={styles.arrowButton}>
        <AntDesign name="right" size={10} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  arrowButton: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  pageText: {
    fontSize: 12,
    color: "#333",
  },
  divider: {
    marginHorizontal: 2,
  },
});

export default Pagination;
`,
        code2: `import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Pagination = () => {
  return (
    <View className="flex-row items-center gap-3">
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <AntDesign name="left" size={10} color="black" />
      </TouchableOpacity>
      <Text className="text-xs text-gray-800">
        1<Text className="mx-0.5"> / </Text>47
      </Text>
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-gray-300 rounded bg-white">
        <AntDesign name="right" size={10} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
`,
        render: <Comp.MarsPagination />,
      },
    ],
  },
};
