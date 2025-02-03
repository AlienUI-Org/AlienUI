"use client";
import { AlienUIIcons } from "./icons";
import { Comp } from "./comp";

type Variant = {
  name: string;
  description: string;
  designer: string;
  developer: string;
  code: string;
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

  const toggleAccordion = (index) => {
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
              <View className="px-5 py-4">
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
        code: `import React from 'react';
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
import { Pressable, Text } from 'react-native';

const Button = () => {
    return (
        <Pressable className="bg-black py-2 px-4 rounded-md flex items-center justify-center w-52">
            <Text className="text-white text-base">Galaxy Button</Text>
        </Pressable>
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
        <View className="flex-1 bg-black/50 justify-end">
          <View className="p-3">
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
import { View, Text } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign"

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
        designer: "Designer: Anwurii Alabi",
        developer: "",
        code: `import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View className="w-full py-8 rounded-3xl border border-black items-center bg-white">
      <View className="flex-row items-center justify-between bg-black py-2 px-4 rounded-full mb-4">
        <Image source={require("../../assets/icon/flag.svg")} className="w-7 h-7" />
        <Text className="text-white ml-2 text-base">USD</Text>
        <MaterialIcons name="keyboard-arrow-down" size={28} color="white" />
      </View>
      <View className="flex-row items-center mb-2 space-x-2">
        <Text className="text-base">Account balance</Text>
        <Image source={require("../../assets/icon/eye.svg")} className="w-6 h-6" />
      </View>
      <Text className="text-5xl font-semibold mb-4">
        $150,000.<Text className="text-4xl text-gray-500">00</Text>
      </Text>
      <View className="flex-row items-center mb-4 space-x-2">
        <Image source={require("../../assets/icon/copy.svg")} className="w-6 h-6" />
        <Text className="text-base">0771224074</Text>
      </View>
      <View className="flex-row justify-center space-x-4">
        <TouchableOpacity className="flex-row items-center justify-center bg-black rounded-full py-3 w-40">
          <Text className="text-white text-base font-semibold mr-2">Deposit</Text>
          <Image source={require("../../assets/icon/import.svg")} className="w-6 h-6" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center bg-black rounded-full py-3 w-40">
          <Text className="text-white text-base font-semibold mr-2">Transfer</Text>
          <Image source={require("../../assets/icon/export.svg")} className="w-6 h-6" />
        </TouchableOpacity>
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
        code: `import React from "react";
import { TextInput } from "react-native";

const Input = () => {
  return (
    <TextInput
      className="border-1 border-black rounded-md p-2.5 w-[80%]"
      placeholder="Nebulon Input..."
    />
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
        code: `import React from "react";
import { TextInput } from "react-native";

const Input = () => {
  return (
    <TextInput
      className="border-1 border-b border-b-black p-2.5  w-[80%]"
      placeholder="Earth Input..."
    />
  );
};

export default Input;
`,
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
import { View, Text, Pressable, Modal } from "react-native";

const GalaxyModal = () => {
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

export default GalaxyModal;
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
            <View className="absolute w-[100%] bottom-full mb-2 z-10 justify-center items-center">
              <View className="h-auto bg-white p-4 rounded shadow">
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
import { View } from "react-native";
import { FontAwesome, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View>
      <View className="h-2 w-[90%]  bg-gray-300 rounded-lg overflow-hidden">
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
import { View } from "react-native";

const ProgressBar = () => {
  return (
    <View>
        <View className="mt-4 h-2 w-[90%]  rounded-full bg-gray-200 overflow-hidden">
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
import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const ProgressBar = () => {
  return (
    <View className="my-5">
      <View className="relative w-[90%]  mt-4 h-1.5 bg-gray-200 rounded-lg">
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
        code: `import React from "react";
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
import { Pressable, View } from "react-native";

const Switch = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <Pressable
      onPress={() => setIsEnabled(!isEnabled)}
      className={\`relative flex h-7 w-14 items-center justify-center rounded-full p-1 transition \${
        isEnabled ? "bg-black" : "bg-gray-400"
      }\`}
    >
      <View
        className={\`h-6 w-6 transform rounded-full bg-white transition \${
          isEnabled ? "translate-x-3" : "translate-x-0"
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
import { View, Text } from "react-native";

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
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
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
        code: `import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Toast = () => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={showToast}
        className="px-4 py-2 bg-black rounded-lg"
      >
        <Text className="text-white font-semibold">Click me</Text>
      </TouchableOpacity>
      {visible && (
        <View className="absolute bottom-40 w-[80%] px-4 py-2 bg-green-500 rounded-lg transition-opacity duration-300 opacity-100 flex-row justify-between items-center">
          <Text className="text-white">Operation successful</Text>
          <TouchableOpacity onPress={onClose} className="ml-2 px-2">
            <Text className="text-white text-lg font-bold">×</Text>
          </TouchableOpacity>
        </View>
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
        code: `import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

const Toast = () => {
  const [visible, setVisible] = useState(false);

  const showToast = () => {
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 2000);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity
        onPress={showToast}
        className="px-4 py-2 bg-black rounded-lg"
      >
        <Text className="text-white font-semibold">Click me</Text>
      </TouchableOpacity>
      {visible && (
        <View className="absolute bottom-40 w-[80%] bg-green-50 border-b-4 border-green-500 px-4 py-3  rounded-lg transition-opacity duration-300 opacity-100 flex-row justify-between items-center">
          <View>
            <Text className="text-sm mb-1">Operation successful!</Text>
            <Text className="text-sm">Moving to the next planet</Text>
          </View>
          <TouchableOpacity onPress={onClose} className="ml-2 px-2">
            <Text className="text-xl font-bold">×</Text>
          </TouchableOpacity>
        </View>
      )}
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
