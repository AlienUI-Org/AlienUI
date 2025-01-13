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
  alert: {
    id: 1,
    name: "Alert",
    icon: AlienUIIcons.AlienBug,
    description: "An alert component with multiple types",
    variants: [
      {
        name: "Galaxy Alert",
        description: "An alien alert for galactic notifications",
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
    <View className="rounded-xl border border-gray-300 bg-white p-4">
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
          "An alien alert for urgent and critical issues in the galaxy",
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
    <View className="rounded-xl border-l-4 border-red-500 bg-red-50 p-4">
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
  badge: {
    id: 2,
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
  button: {
    id: 3,
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
  input: {
    id: 4,
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
};
