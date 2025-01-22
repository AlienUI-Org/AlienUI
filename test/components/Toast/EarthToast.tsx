import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

interface SuccessToastProps {
  onClose: () => void;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ onClose }) => {
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

const EarthToast = () => {
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

export default EarthToast;
