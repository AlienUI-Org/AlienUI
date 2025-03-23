import React, { useState } from "react";
import { View, Text, Dimensions } from "react-native";
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
  label?: string;
  showSteps?: boolean;
  showValue?: boolean;
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
  trackColor = "bg-gray-200", // Default to light gray for the unfilled track
  filledColor = "bg-black", // Default to black for the filled track
  thumbColor = "bg-white", // Default to white for the thumb
  widthClass = "w-[90%]",
  trackHeightClass,
  thumbSizeClass,
  label = "",
  showSteps = false,
  showValue = true,
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

  // Calculate step labels if showSteps is true
  const steps = [];
  if (showSteps) {
    const stepCount = Math.floor((maxValue - minValue) / step);
    for (let i = 0; i <= stepCount; i++) {
      const stepValue = minValue + i * step;
      const stepPosition = (i * (sliderWidth - thumbSize)) / stepCount;
      steps.push(
        <Text
          key={i}
          className="text-black text-xs absolute" // Changed to black for visibility on light background
          style={{
            left: stepPosition,
            top: trackHeight + 8,
          }}
        >
          {stepValue.toFixed(1)}
        </Text>
      );
    }
  }

  return (
    <View className="w-full">
      {/* Label Above */}
      {label && (
        <View className="mb-2">
          <Text className="text-black text-base">{label}</Text>{" "}
          {/* Changed to black */}
        </View>
      )}

      {/* Slider with Optional Value at Top-Right */}
      <View className={`relative ${widthClass}`}>
        {/* Value Displayed at Top-Right of Slider Bar (if showValue is true) */}
        {showValue && (
          <Text
            className="text-black text-base absolute" // Changed to black
            style={{
              top: -20,
              right: 0,
            }}
          >
            {value.toFixed(1)}
          </Text>
        )}

        {/* Slider Track */}
        <View
          className={`${trackColor} ${
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
            } ${radiusClasses[radius]} absolute border-2 border-black`} // Changed border to black
            style={{ left: thumbPosition, top: thumbOffset }}
            {...panResponder.panHandlers}
          />
        </View>
        {showSteps && steps}
      </View>
    </View>
  );
};

export default GalaxySlider;
