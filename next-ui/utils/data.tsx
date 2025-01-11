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
  button: {
    id: 1,
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
            <MaterialCommunityIcons name="alien-outline" size={24} color="white" />
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
        flex: flex-row,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 16,
        marginRight: 1,
    }
});

export default Button;
`,
        code2: `import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Button = () => {
    return (
        <TouchableOpacity className="bg-black border py-2 px-4 rounded-md flex items-center justify-center w-[200px]">
            <Text className="text-white text-base">Earth Button</Text>
            <MaterialCommunityIcons className="ml-1" name="alien-outline" size={24} color="white" />
        </TouchableOpacity>
    );
};

export default Button;`,
        render: <Comp.EarthButton />,
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
        name: "Nebulon Input",
        description: "A simple input box for text entry.",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = () => {
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

export default Input;`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const Input = () => {
    return (
        <View className="p-4">
            <TextInput
                className="border border-gray-300 rounded-md p-2"
                placeholder="Enter text"
            />
        </View>
    );
};

export default Input;`,
        render: <Comp.NebulonInput />,
      },
      {
        name: "Outlined Input",
        description: "An input box with an outlined border.",
        code: `import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

const Input = () => {
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

export default Input;`,
        code2: `import React from 'react';
import { TextInput, View } from 'react-native';

const Input = () => {
    return (
        <View className="p-4">
            <TextInput
                className="border-2 border-blue-500 rounded-md p-2"
                placeholder="Outlined Input"
            />
        </View>
    );
};

export default Input;`,
        render: (
          <input
            className="border-2 border-blue-500 rounded-md p-2"
            placeholder="Enter text"
          />
        ),
      },
    ],
  },
};
