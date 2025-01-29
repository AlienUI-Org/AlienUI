"use client";
import { AlienUIIcons } from "./icons";
import { Comp } from "./comp";

type Variant = {
  name: string;
  description: string;
  designer: string;
  developer: string;
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
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet, ScrollView } from "react-native";

const Accordion = () => {
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
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.accordionContainer}>
        {accordionItems.map((item, index) => (
          <View key={index} style={styles.accordionItem}>
            <Pressable
              onPress={() => toggleAccordion(index)}
              style={styles.accordionHeader}
            >
              <Text style={styles.accordionTitle}>{item.title}</Text>
              <Text
                style={[styles.icon, openIndex === index && styles.iconOpen]}
              >
                ▼
              </Text>
            </Pressable>
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
    borderWidth:1,
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
    backgroundColor: "#ffffff",
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
    backgroundColor: "#ffffff",
  },
  contentText: {
    fontSize: 14,
    color: "#666",
  },
});

export default Accordion;
`,
        code2: `import React, { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";

const Accordion = () => {
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
  ];

  const toggleAccordion = (index: any) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <ScrollView className="flex-1">
      <View className="w-11/12 border">
        {accordionItems.map((item, index) => (
          <View key={index} className="border-b last:border-b-0 border-gray-300">
            <Pressable
              onPress={() => toggleAccordion(index)}
              className={\`flex flex-row justify-between items-center px-5 py-4 bg-white \${openIndex === index ? "bg-white" : ""}\`}
            >
              <Text className="text-base font-medium text-gray-800">
                {item.title}
              </Text>
              <Text
                className={\`text-base transition-transform duration-300 \${
                  openIndex === index ? "rotate-180" : ""
                }\`}
              >
                ▼
              </Text>
            </Pressable>
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
    description:
      "An alert component with multiple types that provides feedback",
    variants: [
      {
        name: "Galaxy Alert",
        description:
          "A galactic alert for feedbacks. This variant shows three props: success, failure and warning. Just change the color and icon to suit your use case",
        designer: "",
        developer: "",
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
    backgroundColor: "#f0fdf4",
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
    <View className="rounded-xl border border-gray-300 bg-green-50 p-4 w-64">
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
          "A galactic alert that provides critical feedback in the galaxy. This variant shows three props: success, failure and warning. Just change the color to suit your use case",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Alert = () => {
  return (
    <View style={styles.alertContainer}>
      <Text style={styles.alertTitle}>Krythar Wail</Text>
      <Text style={styles.alertMessage}>
        Everything is good.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  alertContainer: {
    borderRadius: 8,
    borderLeftWidth: 4,
    borderLeftColor: "#22c55e",
    backgroundColor: "#f0fdf4",
    padding: 16,
    width: 250,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  alertMessage: {
    fontSize: 14,
    lineHeight: 15,
  },
});

export default Alert;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";

const Alert = () => {
  return (
    <View className="rounded-xl border-l-4 border-green-500 bg-green-50 p-4 w-64">
      <Text className="text-lg font-bold">Krythar Wail</Text>
      <Text className="mt-1 text-sm">
        Everything is good.
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
        designer: "",
        developer: "",
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
    description:
      "A customizable badge component with multiple variants for status indication",
    variants: [
      {
        name: "Galaxy Badge",
        description: "An alien badge for galactic verification",
        designer: "",
        developer: "",
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
});
`,
        code2: `import React from 'react';
import { View, Text } from 'react-native'

const Badge = () => {
    return (
        <View className="bg-black px-2 py-1 rounded-full flex items-center justify-center w-20">
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
        designer: "",
        developer: "",
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
        designer: "",
        developer: "",
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

export default Breadcrumb;
`,

        render: <Comp.EarthBreadcrumb />,
      },
    ],
  },
  button: {
    id: 6,
    name: "Button",
    icon: AlienUIIcons.AlienReddit,
    description:
      "A customizable button component to trigger an action or event.",
    variants: [
      {
        name: "Galaxy Button",
        description:
          "A button with a solid background, used for primary actions.",
        designer: "",
        developer: "",
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
        <TouchableOpacity className="bg-black py-2 px-4 rounded-md flex items-center justify-center w-52">
            <Text className="text-white text-base">Galaxy Button</Text>
        </TouchableOpacity>
    );
};

export default Button;
`,
        render: <Comp.GalaxyButton />,
      },
      {
        name: "Earth Button",
        description: "A button with an icon, used for secondary actions.",
        designer: "",
        developer: "",
        code: `import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Button = () => {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>Earth Button</Text>
            <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
        </Pressable>
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
import { Pressable, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Button = () => {
    return (
        <Pressable className="bg-black border py-2 px-4 rounded-md flex flex-row items-center justify-center w-52">
            <Text className="text-white text-base mr-1">Earth Button</Text>
            <MaterialCommunityIcons name="alien-outline" size={20} color="white" />
        </Pressable>
    );
};

export default Button;
`,
        render: <Comp.EarthButton />,
      },
    ],
  },
  card: {
    id: 7,
    name: "Card",
    icon: AlienUIIcons.AlienAlienware,
    description: "A customizable card component with different variant.",
    variants: [
      {
        name: "Galaxy Card",
        description: "A ticket into the galaxy.",
        designer: "",
        developer: "",
        code: `import React from "react";
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
`,
        code2: `import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const Card = () => {
  return (
    <View className="bg-white rounded-lg overflow-hidden shadow-lg m-4">
      <Image
        source={require("../../assets/images/alien1.avif")}
        className="w-full h-52"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-xs text-gray-500 mb-1">07th July 1997</Text>
        <TouchableOpacity>
          <Text className="text-lg font-bold text-gray-900 mb-2">
            Exploring the Unknown: The Alien Encounter Chronicles
          </Text>
        </TouchableOpacity>
        <Text className="text-sm text-gray-500 leading-5">
          Deep in the vastness of space lies a story untold—of strange beings,
          otherworldly landscapes, and encounters that defy imagination.
          Discover the mysteries of alien civilizations, their technology, and
          the secrets they carry across galaxies.
        </Text>
      </View>
    </View>
  );
};

export default Card;
`,
        render: <Comp.GalaxyCard />,
      },
      {
        name: "Earth Card",
        description: "A ticket for navigating on the earth surface.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";

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
`,
        code2: `import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

const Card = () => {
  return (
    <View className="rounded-lg overflow-hidden shadow-lg w-4/5">
      <ImageBackground
        source={require("../../assets/images/alien1.avif")}
        className="w-full"
        imageStyle={{ resizeMode: "cover" }}
        style={{ height: 350 }}
      >
        <View className="flex-1 bg-black/50 justify-end p-4">
          <View className="p-4">
            <Text className="text-xs text-white/90">07th July 1997</Text>
            <TouchableOpacity>
              <Text className="mt-1 text-lg font-bold text-white">
                Exploring the Unknown: The Alien Encounter Chronicles
              </Text>
            </TouchableOpacity>
            <Text className="mt-2 text-sm leading-5 text-white/95">
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

export default Card;
`,
        render: <Comp.EarthCard />,
      },
      {
        name: "Jupiter Card",
        description: "A VIP ticket for entering jupiter.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Card() {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name="join-inner"
        size={56}
        color="#ffffff"
        style={styles.icon}
      />
      <Text style={styles.title}>Open-Source Contributions</Text>
      <Text style={styles.description}>
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#000000",
    padding: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    width: "80%",
    height: 260,
  },
  icon: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  description: {
    marginTop: 8,
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
});

export default Card;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function Card() {
  return (
    <View className="flex flex-col items-center bg-black p-7 shadow-md w-4/5 h-64">
      <MaterialIcons
        name="join-inner"
        size={56}
        color="#ffffff"
        className="mb-4"
      />
      <Text className="text-lg font-bold text-white text-center">
        Open-Source Contributions
      </Text>
      <Text className="mt-2 text-sm text-white text-center">
        Alien UI is open-source, inviting developers to collaborate and share
        components to improve mobile app design.
      </Text>
    </View>
  );
}

export default Card;
`,
        render: <Comp.JupiterCard />,
      },
      {
        name: "Pluto Card",
        description: "A small regular ticket into pluto.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="barschart" size={24} color="#000000" />
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
    backgroundColor: "#000000",
    padding: 18,
  },
  iconContainer: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Card;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons/AntDesign"

const Card = () => {
  return (
    <View className="flex justify-center">
      <View className="w-3/5 h-44 bg-black p-6">
        <View className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6">
          <AntDesign name="barschart" size={24} color="#000000" />
        </View>
        <Text className="text-lg text-white font-bold">Bar chart showing energy usage</Text>
      </View>
    </View>
  );
};

export default Card;
`,
        render: <Comp.PlutoCard />,
      },
      {
        name: "Mars Card",
        description: "A small regular card for transaction in mars.",
        designer: "Anwurii Alabi",
        developer: "Kenneth Akpo",
        code: `import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.iconContainer}>
          <AntDesign name="barschart" size={24} color="#000000" />
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
    backgroundColor: "#000000",
    padding: 18,
  },
  iconContainer: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default Card;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons/AntDesign"

const Card = () => {
  return (
    <View className="flex justify-center">
      <View className="w-3/5 h-44 bg-black p-6">
        <View className="flex items-center justify-center w-12 h-12 bg-white rounded-full mb-6">
          <AntDesign name="barschart" size={24} color="#000000" />
        </View>
        <Text className="text-lg text-white font-bold">Bar chart showing energy usage</Text>
      </View>
    </View>
  );
};

export default Card;
`,
        render: <Comp.MarsCard />,
      },
    ],
  },
  carousel: {
    id: 8,
    name: "Carousel",
    icon: AlienUIIcons.AlienPiAlienDuotone,
    description: "A customizable carousel component for swiping.",
    variants: [
      {
        name: "Galaxy Carousel",
        description: "A carousel for swiping the galaxy.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1, 2, 3, 4, 5];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.slideContainer}>
        <Text style={styles.slideText}>{slides[currentIndex]}</Text>
      </View>

      <View style={styles.navContainer}>
        <Pressable onPress={prevSlide} style={styles.navButton}>
          <AntDesign name="arrowleft" size={16} color="black" />
        </Pressable>
        <Pressable onPress={nextSlide} style={styles.navButton}>
          <AntDesign name="arrowright" size={16} color="black" />
        </Pressable>
      </View>

      <View style={styles.pagination}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slideContainer: {
    width: "80%",
    height: 230,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  slideText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
  },
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 16,
  },
  navButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  pagination: {
    flexDirection: "row",
    marginTop: 16,
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1,
  },
  activeDot: {
    backgroundColor: "#000",
    borderColor: "#000",
  },
  inactiveDot: {
    backgroundColor: "#fff",
    borderColor: "#ddd",
  },
});

export default Carousel;
`,
        code2: `import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [1, 2, 3, 4, 5];

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-4/5 h-56 justify-center items-center bg-white border border-gray-300 rounded shadow">
        <Text className="text-4xl font-bold text-gray-800">
          {slides[currentIndex]}
        </Text>
      </View>

      <View className="flex-row justify-between w-4/5 mt-4">
        <Pressable
          onPress={prevSlide}
          className="w-10 h-10 justify-center items-center bg-white border border-gray-300 rounded-full"
        >
          <AntDesign name="arrowleft" size={16} color="black" />
        </Pressable>
        <Pressable
          onPress={nextSlide}
          className="w-10 h-10 justify-center items-center bg-white border border-gray-300 rounded-full"
        >
          <AntDesign name="arrowright" size={16} color="black" />
        </Pressable>
      </View>

      <View className="flex-row mt-4 space-x-2">
        {slides.map((_, index) => (
          <View
            key={index}
            className={\`w-3 h-3 rounded-full \${
              index === currentIndex
                ? "bg-black border-black"
                : "bg-white border-gray-300"
            } border\`}
          />
        ))}
      </View>
    </View>
  );
};

export default Carousel;
`,
        render: <Comp.GalaxyCarousel />,
      },
    ],
  },
  checkbox: {
    id: 9,
    name: "Checkbox",
    icon: AlienUIIcons.AlienStare,
    description:
      "A customizable checkbox component to toggle options on and off.",
    variants: [
      {
        name: "Galaxy Checkbox",
        description: "An intergalactic checkbox for cosmic forms.",
        designer: "",
        developer: "",
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
  dropdown: {
    id: 10,
    name: "Dropdown",
    icon: AlienUIIcons.AlienTbAlienFilled,
    description: "A customizable dropdown component.",
    variants: [
      {
        name: "Galaxy Dropdown",
        description: "A intergalactic dropdown for selection.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { View, Text, Pressable, FlatList, StyleSheet } from "react-native";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Galaxy Dropdown", "Nebula Dropdown", "Earth Dropdown"];

  const handleOptionClick = (option) => {
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
`,
        code2: `import React, { useState } from "react";
import { View, Text, Pressable, FlatList } from "react-native";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const options = ["Galaxy Dropdown", "Nebula Dropdown", "Earth Dropdown"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <View className="w-4/5 self-center mt-12">
      <Text className="text-base text-gray-700 mb-2">Choose an option</Text>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        className={\`flex-row justify-between items-center bg-white border border-gray-300 px-4 py-3 \${
          isOpen ? "rounded-t-lg" : "rounded-lg"
        }\`}
      >
        <Text className="text-base text-gray-700">
          {selectedOption || "Select an option"}
        </Text>
        <Text className="text-base text-gray-700">{isOpen ? "▲" : "▼"}</Text>
      </Pressable>
      {isOpen && (
        <View className="bg-white border border-gray-300 rounded-b-lg mt-2 max-h-40">
          <FlatList
            data={options}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => handleOptionClick(item)}
                className="px-4 py-3"
              >
                <Text className="text-base text-gray-700">{item}</Text>
              </Pressable>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
`,
        render: <Comp.GalaxyDropdown />,
      },
    ],
  },
  input: {
    id: 11,
    name: "Input",
    icon: AlienUIIcons.AlienEgg,
    description: "A customizable input component for capturing user data.",
    variants: [
      {
        name: "Nebulon Input",
        description: "A simple input box for text entry.",
        designer: "",
        developer: "",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Nebulon Input..."
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

export default Input;
`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const Input = () => {
    return (
        <View className="w-52">
            <TextInput
                className="border-1 border-black rounded-md p-2.5"
                placeholder="Nebulon Input..."
            />
        </View>
    );
};

export default Input;
`,
        render: <Comp.NebulonInput />,
      },
      {
        name: "Earth Input",
        description: "An input box with a bottom border.",
        designer: "",
        developer: "",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Earth Input..."
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
        <View className="w-52">
            <TextInput
                className="border-1 border-b border-b-black p-2.5"
                placeholder="Earth Input..."
            />
        </View>
    );
};

export default Input;`,
        render: <Comp.EarthInput />,
      },
    ],
  },
  modal: {
    id: 12,
    name: "Modal",
    icon: AlienUIIcons.AlienSkull,
    description:
      "A customizable modal that highlights key information or actions.",
    variants: [
      {
        name: "Galaxy Modal",
        description:
          "A default galactic modal for highlighting key information in the galaxy.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { View, Text, Pressable, Modal, StyleSheet } from "react-native";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <View style={styles.container}>
      <Pressable onPress={openModal} style={styles.openButton}>
        <Text style={styles.buttonText}>Open Modal</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View style={styles.overlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Galaxy Modal</Text>
              <Pressable onPress={closeModal}>
                <Text style={styles.closeButton}>✖</Text>
              </Pressable>
            </View>

            <View style={styles.modalBody}>
              <Text style={styles.modalContent}>
                This is a default galaxy modal component that highlights key
                information
              </Text>
            </View>

            <View style={styles.modalFooter}>
              <Pressable
                onPress={closeModal}
                style={styles.closeButtonContainer}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  openButton: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 6,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  closeButton: {
    fontSize: 18,
    color: "#000000",
  },
  modalBody: {
    marginVertical: 20,
  },
  modalContent: {
    fontSize: 16,
    color: "#555",
  },
  modalFooter: {
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  closeButtonContainer: {
    backgroundColor: "#000",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});

export default Modal;
`,
        code2: `import React, { useState } from "react";
import { View, Text, Pressable, Modal } from "react-native";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <View className="flex-1 items-center justify-center">
      <Pressable onPress={openModal} className="bg-black py-2 px-4 rounded-md">
        <Text className="text-white text-base">Open Modal</Text>
      </Pressable>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={closeModal}
      >
        <View className="flex-1 items-center justify-center bg-black/50">
          <View className="w-11/12 bg-white rounded-md shadow-md p-6">
            <View className="flex-row items-center justify-between border-b pb-4">
              <Text className="text-xl font-semibold">Galaxy Modal</Text>
              <Pressable onPress={closeModal}>
                <Text className="text-gray-400 text-lg">✖</Text>
              </Pressable>
            </View>

            <View className="my-4">
              <Text className="text-gray-600 text-base">
                This is a default galaxy modal component that highlights key
                information.
              </Text>
            </View>

            <View className="flex-row justify-end border-t pt-4">
              <Pressable
                onPress={closeModal}
                className="bg-black py-2 px-4 rounded-md"
              >
                <Text className="text-white text-base">Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Modal;
`,
        render: <Comp.GalaxyModal />,
      },
    ],
  },
  pagination: {
    id: 13,
    name: "Pagination",
    icon: AlienUIIcons.AlienCrackedAlienSkull,
    description: "A customizable pagination component.",
    variants: [
      {
        name: "Galaxy Pagination",
        description: "A default galactic pagination in the galaxy.",
        designer: "",
        developer: "",
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
    backgroundColor: "#000000",
    borderColor: "#000000",
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
      <TouchableOpacity className="w-8 h-8 justify-center items-center border border-black rounded bg-black">
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

export default Pagination;
`,

        render: <Comp.GalaxyPagination />,
      },
      {
        name: "Mars Pagination",
        description: "Paginating to mars.",
        designer: "",
        developer: "",
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
  popover: {
    id: 14,
    name: "Popover",
    icon: AlienUIIcons.AlienPiAlienBold,
    description: "A customizable popover component.",
    variants: [
      {
        name: "Galaxy Popover",
        description: "A default popover that displays rich content in a page.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions, TouchableWithoutFeedback, Pressable } from "react-native";

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
`,
        code2: `import React, { useState } from "react";
import { View, Text, Pressable, TouchableWithoutFeedback } from "react-native";

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
      <View className="flex-1 justify-center items-center">
        <Pressable
          className="bg-black px-4 py-2 rounded"
          onPress={togglePopover}
        >
          <Text className="text-white text-base">Toggle Popover</Text>
        </Pressable>

        {isOpen && (
          <TouchableWithoutFeedback>
            <View className="absolute bottom-full mb-2 z-10 justify-center items-center">
              <View className="w-3/4 h-auto bg-white p-4 rounded shadow">
                <Text className="text-base">This is a Galaxy Popover</Text>
                <Text className="text-gray-500 mt-2 text-sm">
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

export default Popover;
`,
        render: <Comp.GalaxyPopover />,
      },
    ],
  },
  progressbar: {
    id: 15,
    name: "Progress",
    icon: AlienUIIcons.AlienTbAlien,
    description:
      "A customizable progress bar component for tracking task progression.",
    variants: [
      {
        name: "Galaxy Progress Bar",
        description: "A default galactic progress bar.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBarContainer}>
        <View style={styles.progressBarFilled}></View>
      </View>
      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <FontAwesome name="info-circle" size={24} color="black" />
        </View>
        <View style={styles.step}>
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        </View>
        <View style={styles.step}>
          <AntDesign name="creditcard" size={24} color="#A1A1AA" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
    overflow: "hidden",
  },
  progressBarFilled: {
    height: "100%",
    width: "50%",
    backgroundColor: "#000000",
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  step: {
    alignItems: "center",
    flex: 1,
  },
});

export default ProgressBar;
`,
        code2: `import React from "react";
import { View } from "react-native";
import { FontAwesome, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View className="p-4">
      <View className="h-2 w-full bg-gray-300 rounded-lg overflow-hidden">
        <View className="h-full w-1/2 bg-black" />
      </View>
      <View className="flex-row justify-between mt-4">
        <View className="flex-1 items-center">
          <FontAwesome name="info-circle" size={24} color="black" />
        </View>
        <View className="flex-1 items-center">
          <MaterialCommunityIcons name="map-marker" size={24} color="black" />
        </View>
        <View className="flex-1 items-center">
          <AntDesign name="creditcard" size={24} color="#A1A1AA" />
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
`,
        render: <Comp.GalaxyProgressBar />,
      },
      {
        name: "Earth Progress Bar",
        description: "A progress bar showing progression on the earth surface.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, StyleSheet } from "react-native";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.progressBarBackground}>
          <View style={styles.progressBarFilled}></View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  progressBarBackground: {
    marginTop: 16,
    height: 8,
    borderRadius: 9999,
    backgroundColor: "#E5E7EB",
    overflow: "hidden",
  },
  progressBarFilled: {
    height: "100%",
    width: "66.6667%",
    borderRadius: 9999,
    backgroundColor: "#000000",
  },
});

export default ProgressBar;
`,
        code2: `import React from "react";
import { View } from "react-native";

const ProgressBar = () => {
  return (
    <View className="m-4">
        <View className="mt-4 h-2 w-full rounded-full bg-gray-200 overflow-hidden">
          <View className="h-full w-2/3 rounded-full bg-black"></View>
        </View>
    </View>
  );
};

export default ProgressBar;
`,
        render: <Comp.EarthProgressBar />,
      },
      {
        name: "Mars Progress Bar",
        description: "A progress bar showing progression on mars.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={styles.stepsContainer}>
          <View style={[styles.stepItem, styles.stepStart]}>
            <View style={[styles.stepIcon, styles.activeStep]}>
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text style={[styles.stepLabel, styles.activeLabel]}>Details</Text>
          </View>
          <View style={styles.stepItem}>
            <View style={[styles.stepIcon, styles.activeStep]}>
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text style={[styles.stepLabel, styles.activeLabel]}>Address</Text>
          </View>
          <View style={[styles.stepItem, styles.stepEnd]}>
            <View style={styles.stepIcon}>
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text style={styles.stepLabel}>Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 16,
  },
  progressBar: {
    position: "relative",
    marginTop: 16,
    height: 6,
    backgroundColor: "#E5E7EB",
    borderRadius: 8,
  },
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    top: -16,
    left: 0,
    right: 0,
  },
  stepItem: {
    alignItems: "center",
    flex: 1,
  },
  stepStart: {
    alignItems: "flex-start",
  },
  stepEnd: {
    alignItems: "flex-end",
  },
  stepIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#6B7280",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  activeStep: {
    backgroundColor: "#000000",
  },
  stepLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
  },
  activeLabel: {
    color: "#000000",
  },
});

export default ProgressBar;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View className="my-5 px-4">
      <View className="relative w-full mt-4 h-1.5 bg-gray-200 rounded-lg">
        <View className="absolute inset-0 flex flex-row justify-between -top-4">
          <View className="flex-1 items-start">
            <View className="w-9 h-9 p-2 rounded-full bg-black justify-center items-center mb-2">
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text className="text-xs font-medium text-black">Details</Text>
          </View>
          <View className="flex-1 items-center">
            <View className="w-9 h-9 p-2 rounded-full bg-black justify-center items-center mb-2">
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text className="text-xs font-medium text-black">Address</Text>
          </View>
          <View className="flex-1 items-end">
            <View className="w-9 h-9 p-2 rounded-full bg-gray-400 justify-center items-center mb-2">
              <FontAwesome name="check-circle" size={20} color="white" />
            </View>
            <Text className="text-xs font-medium text-gray-500">Payment</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProgressBar;
`,
        render: <Comp.MarsProgressBar />,
      },
    ],
  },
  spinner: {
    id: 16,
    name: "Spinner",
    icon: AlienUIIcons.AlienLiaRedditAlien,
    description:
      "A customizable spinner that provides visual feedback during processing.",
    variants: [
      {
        name: "Galaxy Spinner",
        description: "A default spinner for loading state changes.",
        designer: "",
        developer: "",
        code: `import React, { useRef, useEffect } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";

const Spinner = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const spin = () => {
      spinValue.setValue(0);

      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start((finished) => {
        if (finished) {
          spin();
        }
      });
    };

    spin();

    return () => {
      spinValue.stopAnimation();
    };
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.spinner, { transform: [{ rotate: spin }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: 48,
    height: 48,
    borderWidth: 4,
    borderColor: "#000000",
    borderTopColor: "transparent",
    borderRadius: 25,
  },
});

export default Spinner;
`,
        code2: `import React from "react";
import { View } from "react-native";

const Spinner = () => {
  return (
    <View className="flex items-center justify-center">
      <View className="h-12 w-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
    </View>
  );
};

export default Spinner;
`,
        render: <Comp.GalaxySpinner />,
      },
      {
        name: "Earth Spinner",
        description:
          "A spherical earth-shaped loader that changes color while loading.",
        designer: "",
        developer: "",
        code: `import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";

const Spinner = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const colors = ["black", "red", "blue", "green", "yellow"];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentColorIndex(index);
      index = (index + 1) % colors.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  const colors = ["black", "red", "blue", "green", "yellow"];
  const currentColor = colors[currentColorIndex];

  return (
    <View style={styles.container}>
      <View style={[styles.spinner, { backgroundColor: currentColor }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
});

export default Spinner;
`,
        code2: `import React, { useState, useEffect } from "react";
import { View } from "react-native";

const Spinner = () => {
  const [currentColor, setCurrentColor] = useState("bg-black");

  useEffect(() => {
    const colors = [
      "bg-black",
      "bg-red-500",
      "bg-blue-500",
      "bg-green-500",
      "bg-yellow-500",
    ];
    let index = 0;

    const interval = setInterval(() => {
      setCurrentColor(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="flex items-center justify-center">
      <View className={\`w-12 h-12 \${currentColor} rounded-full animate-spin\`} />
    </View>
  );
};

export default Spinner;
`,
        render: <Comp.EarthSpinner />,
      },
    ],
  },
  switch: {
    id: 17,
    name: "Switch",
    icon: AlienUIIcons.AlienPiAlienThin,
    description: "A customizable switch for enabling and disabling options.",
    variants: [
      {
        name: "Galaxy Switch",
        description: "A default switch for toggling on and off.",
        designer: "",
        developer: "",
        code: `import React, { useState } from "react";
import { StyleSheet, Animated, Pressable } from "react-native";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const translateX = new Animated.Value(isEnabled ? 20 : 0);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    Animated.timing(translateX, {
      toValue: isEnabled ? 0 : 20,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={[
        styles.switchContainer,
        { backgroundColor: isEnabled ? "#000000" : "#ccc" },
      ]}
      onPress={toggleSwitch}
    >
      <Animated.View
        style={[styles.switchKnob, { transform: [{ translateX }] }]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 55,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    padding: 2,
  },
  switchKnob: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
  },
});

export default Switch;
`,
        code2: `import React, { useState } from "react";
import { Pressable, View } from "react-native";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Pressable
      onPress={() => setIsEnabled(!isEnabled)}
      className={\`relative inline-flex h-7 w-14 items-center rounded-full transition \${
        isEnabled ? "bg-black" : "bg-gray-400"
      }\`}
    >
      <View
        className={\`absolute inline-block h-6 w-6 transform rounded-full bg-white transition \${
          isEnabled ? "translate-x-7" : "translate-x-1"
        }\`}
      />
    </Pressable>
  );
};

export default Switch;
`,
        render: <Comp.GalaxySwitch />,
      },
    ],
  },
  tab: {
    id: 18,
    name: "Tab",
    icon: AlienUIIcons.AlienRiAliensLine,
    description: "A customizable tab navigation component with variants.",
    variants: [
      {
        name: "Galaxy Tab",
        description: "A default galactic tab navigator.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { StyleSheet, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.active}>
          <AntDesign name="home" size={24} color="black" />
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
    backgroundColor: "#000000",
  },
  active: {
    borderRadius: 30,
    width: 50,
    height: 50,
    backgroundColor: "#ffffff",
    padding: 4,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Tab;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = () => {
  return (
    <View className="flex items-center">
      <View className="flex-row w-11/12 items-center justify-around rounded-full bg-black py-2">
        <View className="bg-white rounded-full w-12 h-12 flex items-center justify-center">
          <AntDesign name="home" size={24} color="#000000" />
        </View>
        <View className="text-white">
          <AntDesign name="contacts" size={24} color="white" />
        </View>
        <View className="text-white">
          <AntDesign name="shoppingcart" size={24} color="white" />
        </View>
        <View className="text-white">
          <AntDesign name="barschart" size={24} color="white" />
        </View>
        <View className="text-white">
          <AntDesign name="setting" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default Tab;
`,
        render: <Comp.GalaxyTab />,
      },
      {
        name: "Earth Tab",
        description: "Tab navigator on the earth surface.",
        designer: "",
        developer: "",
        code: `import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Tab = () => {
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
    backgroundColor: "#000000",
  },
  text: {
    color: "#ffffff",
  },
});

export default Tab;
`,
        code2: `import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Tab = () => {
  return (
    <View className="flex items-center">
      <View className="flex-row w-11/12 items-center justify-around rounded bg-black py-4">
        <View>
          <Text className="text-white">Home</Text>
        </View>
        <View>
          <Text className="text-white">Contact</Text>
        </View>
        <View>
          <Text className="text-white">Carts</Text>        
        </View>
        <View>
          <Text className="text-white">Chart</Text>        
        </View>
        <View>
          <Text className="text-white">Settings</Text>        
         </View>
      </View>
    </View>
  );
};

export default Tab;
`,
        render: <Comp.EarthTab />,
      },
    ],
  },
  table: {
    id: 19,
    name: "Table",
    icon: AlienUIIcons.AlienBug,
    description: "A customizable table component for data storage",
    variants: [
      {
        name: "Galaxy Table",
        description: "A default table for storing data in rows and column",
        designer: "",
        developer: "",
        code: `import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";

const Table = () => {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Viewer" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.row, styles.header]}>
            <Text style={[styles.cell, styles.headerText, styles.idColumn]}>
              ID
            </Text>
            <Text style={[styles.cell, styles.headerText]}>Name</Text>
            <Text style={[styles.cell, styles.headerText]}>Email</Text>
            <Text style={[styles.cell, styles.headerText]}>Role</Text>
          </View>

          {/* Table Body */}
          <FlatList
            data={tableData}
            renderItem={({ item, index }) => (
              <View
                style={[
                  styles.row,
                  index % 2 === 1 ? styles.evenRow : styles.oddRow,
                ]}
              >
                <Text style={[styles.cell, styles.idColumn]}>{item.id}</Text>
                <Text style={styles.cell}>{item.name}</Text>
                <Text style={styles.cell}>{item.email}</Text>
                <Text style={styles.cell}>{item.role}</Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
  },
  table: {
    minWidth: 600,
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  cell: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    textAlign: "left",
    fontSize: 16,
  },
  idColumn: {
    flex: 0.5,
  },
  header: {
    backgroundColor: "#f3f4f6",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "left",
  },
  oddRow: {
    backgroundColor: "#fff",
  },
  evenRow: {
    backgroundColor: "#f9f9f9",
  },
});

export default Table;
`,
        code2: `import React from "react";
import { View, Text, FlatList, ScrollView } from "react-native";

const Table = () => {
  const tableData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Editor" },
    { id: 3, name: "Sam Wilson", email: "sam@example.com", role: "Viewer" },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <ScrollView horizontal>
        <View className="min-w-[600px] border-collapse">
          <View className="flex-row bg-gray-100">
            <Text className="flex-[0.5] font-bold text-base text-left px-4 py-2">
              ID
            </Text>
            <Text className="flex-1 font-bold text-base text-left px-4 py-2">
              Name
            </Text>
            <Text className="flex-1 font-bold text-base text-left px-4 py-2">
              Email
            </Text>
            <Text className="flex-1 font-bold text-base text-left px-4 py-2">
              Role
            </Text>
          </View>

          <FlatList
            data={tableData}
            renderItem={({ item, index }) => (
              <View
                className={\`flex-row \${
                  index % 2 === 1 ? "bg-white" : "bg-gray-100"
                }\`}
              >
                <Text className="flex-[0.5] text-base text-left px-4 py-2">
                  {item.id}
                </Text>
                <Text className="flex-1 text-base text-left px-4 py-2">
                  {item.name}
                </Text>
                <Text className="flex-1 text-base text-left px-4 py-2">
                  {item.email}
                </Text>
                <Text className="flex-1 text-base text-left px-4 py-2">
                  {item.role}
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;
`,
        render: <Comp.GalaxyTable />,
      },
    ],
  },
  toast: {
    id: 20,
    name: "Toast",
    icon: AlienUIIcons.AlienPiAlienLight,
    description:
      "A customizable toast component with variants that provides feedback.",
    variants: [
      {
        name: "Galaxy Toast",
        description:
          "A default toast component that shows different props: success, failure and warning, by changing the color and text to suit your use case.",
        designer: "",
        developer: "",
        code: `import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

const SuccessToast = ({ onClose }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onClose());
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose, opacity]);

  return (
    <Animated.View style={[styles.toastContainer, { opacity }]}>
      <Text style={styles.toastText}>Operation successful!</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowToast(true)}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "semibold",
  },
  toastContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: "60%",
    maxWidth: 400,
  },
  toastText: {
    color: "#fff",
    fontSize: 14,
  },
  closeButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Toast;
`,
        code2: `import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

const SuccessToast = ({ onClose }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onClose());
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose, opacity]);

  return (
    <Animated.View
      className="absolute top-12 left-5 right-5 self-center bg-green-600 px-4 py-3 flex-row justify-between items-center rounded-lg shadow-md"
      style={{ opacity }}
    >
      <Text className="text-white text-sm">Operation successful!</Text>
      <TouchableOpacity onPress={onClose} className="ml-2 px-2">
        <Text className="text-white text-lg font-bold">×</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="bg-black px-5 py-3 rounded-lg"
        onPress={() => setShowToast(true)}
      >
        <Text className="text-white text-base font-semibold">Click me</Text>
      </TouchableOpacity>
      {showToast && (
        <SuccessToast onClose={() => setShowToast(false)} />
      )}
    </View>
  );
};

export default Toast;
`,
        render: <Comp.GalaxyToast />,
      },
      {
        name: "Earth Toast",
        description:
          "A toast component that shows different props: success, failure and warning, by changing the color and text to suit your use case.",
        designer: "",
        developer: "",
        code: `import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated } from "react-native";

const SuccessToast = ({ onClose }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onClose());
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose, opacity]);

  return (
    <Animated.View style={[styles.toastContainer, { opacity }]}>
      <View>
        <Text style={styles.toastText}>Operation successful!</Text>
        <Text style={styles.toastText2}>Moving to the next planet</Text>
      </View>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowToast(true)}
      >
        <Text style={styles.buttonText}>Click me</Text>
      </TouchableOpacity>
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  button: {
    backgroundColor: "#000000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "semibold",
  },
  toastContainer: {
    position: "absolute",
    top: 50,
    left: 20,
    right: 20,
    alignSelf: "center",
    padding: 15,
    borderBottomWidth: 4,
    borderBottomColor: "#22c55e",
    backgroundColor: "#f0fdf4",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    width: "60%",
    maxWidth: 400,
  },
  toastText: {
    fontSize: 14,
    marginBottom: 4,
  },
  toastText2: {
    fontSize: 14,
  },
  closeButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Toast;
`,
        code2: `import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Animated } from "react-native";

const SuccessToast = ({ onClose }) => {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onClose());
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose, opacity]);

  return (
    <Animated.View
      className="absolute top-12 left-5 right-5 self-center bg-green-50 border-b-4 border-green-500 px-4 py-3 flex-row justify-between items-center shadow-lg"
      style={{ opacity }}
    >
      <View>
        <Text className="text-sm mb-1">Operation successful!</Text>
        <Text className="text-sm">Moving to the next planet</Text>
      </View>
      <TouchableOpacity onPress={onClose} className="ml-2 px-2">
        <Text className="text-xl font-bold">×</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const Toast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <View className="flex-1 justify-center items-center relative">
      <TouchableOpacity
        className="bg-black px-5 py-3 rounded-lg"
        onPress={() => setShowToast(true)}
      >
        <Text className="text-white text-base font-semibold">Click me</Text>
      </TouchableOpacity>
      {showToast && <SuccessToast onClose={() => setShowToast(false)} />}
    </View>
  );
};

export default Toast;
`,
        render: <Comp.EarthToast />,
      },
    ],
  },
};
