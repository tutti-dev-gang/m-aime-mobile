import { React } from "react";
import { StyleSheet, Pressable, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function MaimeButton({ onPress, text, disabled, ...props }) {
  return (
    <Pressable
      style={[styles.button, styles.shadowProp, styles.elevation, disabled && { opacity: 0.5 }]}
      onPress={onPress}
      {...props}
    >
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    shadowColor: "#000",
    backgroundColor: "#FFE6C9",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  elevation: {
    shadowColor: "#000",
    elevation: 4,
  },
});