import { View } from "react-native";
import React from "react";
import Avatar from "../components/comp1/Avatar";
import Card from "../components/comp1/Card";
import Card2 from "../components/comp1/Card2";
import Pocket from "../components/comp1/Pocket";
import Card3 from "../components/comp1/Card3";
import Tab from "../components/comp1/Tab";

const TempScreen1 = () => {
  return (
    <View className="bg-[#F1F3FE] ">
      <Avatar />
      <Card />
      <Card2 />
      <Pocket />
      <Card3 />
      <Tab />
    </View>
  );
};

export default TempScreen1;
