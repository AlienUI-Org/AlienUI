import React, { useState } from "react";
import { View, StyleSheet, PanResponder, Dimensions } from "react-native";

interface GalaxySliderProps {
  minValue?: number;
  maxValue?: number;
  defaultValue?: number;
  step?: number;
  size?: "small" | "medium" | "large";
  onValueChange?: (value: number) => void;
}

const SCREEN_WIDTH = Dimensions.get("window").width;

const GalaxySlider: React.FC<GalaxySliderProps> = ({
  minValue = 0,
  maxValue = 100,
  defaultValue = 50,
  step = 1,
  size = "medium",
  onValueChange,
}) => {
  const sizeConfig = {
    small: { sliderWidth: SCREEN_WIDTH * 0.9, thumbSize: 18, trackHeight: 6 },
    medium: { sliderWidth: SCREEN_WIDTH * 0.9, thumbSize: 24, trackHeight: 8 },
    large: { sliderWidth: SCREEN_WIDTH * 0.9, thumbSize: 26, trackHeight: 12 },
  };

  const { sliderWidth, thumbSize, trackHeight } = sizeConfig[size];

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

  // Ensure filled track width aligns with thumb position
  const filledWidth = thumbPosition + thumbSize / 2;

  return (
    <View style={styles.container}>
      <View style={styles.sliderWrapper}>
        <View
          style={[
            styles.track,
            {
              width: sliderWidth,
              height: trackHeight,
              borderRadius: trackHeight / 2,
            },
          ]}
        >
          <View
            style={[
              styles.filledTrack,
              {
                width: filledWidth,
                height: trackHeight,
                borderRadius: trackHeight / 2,
              },
            ]}
          />
          <View
            style={[
              styles.thumb,
              {
                left: thumbPosition,
                width: thumbSize,
                height: thumbSize,
                borderRadius: thumbSize / 2,
                top: -(thumbSize - trackHeight) / 2,
              },
            ]}
            {...panResponder.panHandlers}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: 8,
  },
  sliderWrapper: {
    width: "100%",
  },
  track: {
    backgroundColor: "#4b4b4b", // Gray for unfilled track
    position: "relative",
  },
  filledTrack: {
    backgroundColor: "#a17bff", // Galaxy purple
    position: "absolute",
  },
  thumb: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#000000",
  },
});

export default GalaxySlider;
