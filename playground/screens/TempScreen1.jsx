import { View } from "react-native";
import React from "react";
import Avatar from "../components/comp1/Avatar";
import Card from "../components/comp1/Card";
import Card2 from "../components/comp1/Card2";

const TempScreen1 = () => {
  return (
    <View className="bg-blue-50">
      <Avatar />
      <Card />
      <Card2 />
    </View>
  );
};

export default TempScreen1;
