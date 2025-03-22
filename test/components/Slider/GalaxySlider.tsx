import React, { useState } from "react";
import { View, Dimensions } from "react-native";
import { PanResponder } from "react-native";

interface GalaxySliderProps {
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
  step?: number;
  size?: "small" | "medium" | "large";
  radius?: "full" | "lg" | "md" | "sm" | "none";
  onValueChange?: (value: number) => void;
  trackColor?: string;
  filledColor?: string;
  thumbColor?: string;
  widthClass?: string;
  trackHeightClass?: string;
  thumbSizeClass?: string;
}

const SCREEN_WIDTH = Dimensions.get("window").width;

const GalaxySlider: React.FC<GalaxySliderProps> = ({
  minValue = 0,
  maxValue = 100,
  defaultValue = 50,
  step = 1,
  size = "medium",
  radius = "full",
  onValueChange,
  trackColor = "bg-gray-600",
  filledColor = "bg-purple-500",
  thumbColor = "bg-white",
  widthClass = "w-[90%]",
  trackHeightClass,
  thumbSizeClass,
}) => {
  const radiusClasses = {
    full: "rounded-full",
    lg: "rounded-lg",
    md: "rounded-md",
    sm: "rounded-sm",
    none: "rounded-none",
  };

  const sizeConfig = {
    small: {
      sliderWidth: SCREEN_WIDTH * 0.9,
      thumbSize: 18,
      trackHeight: 6,
      trackHeightClass: "h-[6px]",
      thumbSizeClass: "w-[18px] h-[18px]",
    },
    medium: {
      sliderWidth: SCREEN_WIDTH * 0.9,
      thumbSize: 24,
      trackHeight: 8,
      trackHeightClass: "h-[8px]",
      thumbSizeClass: "w-[24px] h-[24px]",
    },
    large: {
      sliderWidth: SCREEN_WIDTH * 0.9,
      thumbSize: 26,
      trackHeight: 12,
      trackHeightClass: "h-[12px]",
      thumbSizeClass: "w-[26px] h-[26px]",
    },
  };

  const {
    sliderWidth,
    thumbSize,
    trackHeight,
    trackHeightClass: defaultTrackHeightClass,
    thumbSizeClass: defaultThumbSizeClass,
  } = sizeConfig[size];

  const [value, setValue] = useState(defaultValue);
  const initialPosition =
    ((defaultValue - minValue) / (maxValue - minValue)) *
    (sliderWidth - thumbSize);
  const [thumbPosition, setThumbPosition] = useState(initialPosition);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      const newPosition = Math.max(
        0,
        Math.min(sliderWidth - thumbSize, thumbPosition + gestureState.dx)
      );
      const rawValue =
        minValue +
        (newPosition / (sliderWidth - thumbSize)) * (maxValue - minValue);
      const steppedValue = Math.round(rawValue / step) * step;

      setThumbPosition(newPosition);
      setValue(steppedValue);
      onValueChange?.(steppedValue);
    },
    onPanResponderRelease: () => {},
  });

  const filledWidth = thumbPosition + thumbSize / 2;
  const thumbOffset = -(thumbSize - trackHeight) / 2;

  return (
    <View className="items-center py-2">
      <View className="w-full">
        <View
          className={`${trackColor} ${widthClass} ${
            trackHeightClass || defaultTrackHeightClass
          } relative rounded-full`}
        >
          <View
            className={`${filledColor} ${
              trackHeightClass || defaultTrackHeightClass
            } absolute rounded-full`}
            style={{ width: filledWidth }}
          />
          <View
            className={`${thumbColor} ${
              thumbSizeClass || defaultThumbSizeClass
            } ${radiusClasses[radius]} absolute border-2 border-black`}
            style={{ left: thumbPosition, top: thumbOffset }}
            {...panResponder.panHandlers}
          />
        </View>
      </View>
    </View>
  );
};

export default GalaxySlider;
