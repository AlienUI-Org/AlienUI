"use client";
import { AlienUIIcons } from "./icons";

export const components = {
  button: {
    id: 1,
    name: "Button",
    icon: AlienUIIcons.AlienReddit,
    description:
      "A customizable button component with multiple variants to suit different use cases.",
    variants: [
      {
        name: "Primary Button",
        description:
          "A button with a solid background, used for primary actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrimaryButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#007BFF',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                alignItems: 'center',
                width: 200,
            }}
        >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Primary Button</Text>
        </TouchableOpacity>
    );
};

export default PrimaryButton;`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PrimaryButton = () => {
    return (
        <TouchableOpacity className="bg-blue-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Primary Button</Text>
        </TouchableOpacity>
    );
};

export default PrimaryButton;`,
      },
      {
        name: "Secondary Button",
        description:
          "A button with a subtle background, used for secondary actions.",
        code: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SecondaryButton = () => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: '#28a745',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
                alignItems: 'center',
                width: 200,
            }}
        >
            <Text style={{ color: '#FFFFFF', fontSize: 16 }}>Secondary Button</Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const SecondaryButton = () => {
    return (
        <TouchableOpacity className="bg-green-500 py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Secondary Button</Text>
        </TouchableOpacity>
    );
};

export default SecondaryButton;`,
      },
    ],
  },
  input: {
    id: 2,
    name: "Input",
    icon: AlienUIIcons.AlienBug,
    description: "A customizable input component for capturing user data.",
    variants: [
      {
        name: "Basic Input",
        description: "A simple input box for text entry.",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const BasicInput = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Enter text"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
    },
});

export default BasicInput;`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const BasicInput = () => {
    return (
        <View className="p-4">
            <TextInput
                className="border border-gray-300 rounded-md p-2"
                placeholder="Enter text"
            />
        </View>
    );
};

export default BasicInput;`,
      },
      {
        name: "Outlined Input",
        description: "An input box with an outlined border.",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const OutlinedInput = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Outlined Input"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: '#007BFF',
        borderRadius: 5,
        padding: 10,
    },
});

export default OutlinedInput;`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const OutlinedInput = () => {
    return (
        <View className="p-4">
            <TextInput
                className="border-2 border-blue-500 rounded-md p-2"
                placeholder="Outlined Input"
            />
        </View>
    );
};

export default OutlinedInput;`,
      },
    ],
  },
};
