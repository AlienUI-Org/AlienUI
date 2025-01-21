import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";

interface SuccessToastProps {
  message: string;
  onClose: () => void;
}

const SuccessToast: React.FC<SuccessToastProps> = ({ message, onClose }) => {
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
      <Text style={styles.toastText}>{message}</Text>
      <TouchableOpacity onPress={onClose} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>×</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const GalaxyToast = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setShowToast(true)}
      >
        <Text style={styles.buttonText}>Click me to show success toast</Text>
      </TouchableOpacity>
      {showToast && (
        <SuccessToast
          message="Operation successful!"
          onClose={() => setShowToast(false)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#28a745",
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
    position: "static",
    top: 20,
    alignSelf: "center",
    padding: 15,
    backgroundColor: "#28a745",
    borderRadius: 8,
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
    color: "#fff",
    fontSize: 14,
  },
  closeButton: {
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default GalaxyToast;
