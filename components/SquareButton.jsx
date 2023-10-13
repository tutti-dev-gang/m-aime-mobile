import { React } from "react";
import { StyleSheet, Pressable } from "react-native";
import {
  Octicons,
  EvilIcons,
  FontAwesome5,
  FontAwesome,
} from "@expo/vector-icons"; 

export default function SquareButton({
  icon,
  onPress,
  color,
  size,
  source = "FontAwesome",
  ...props
}) {
  return (
    <Pressable
      style={[styles.button, styles.shadowProp, styles.elevation]}
      onPress={onPress}
      {...props}
    >
      {source == "FontAwesome" && (
        <FontAwesome style={{ color: color, fontSize: size }} name={icon} />
      )}
      {source == "EvilIcons" && (
        <EvilIcons style={{ color: color, fontSize: size }} name={icon} />
      )}
      {source == "FontAwesome5" && (
        <FontAwesome5 style={{ color: color, fontSize: size }} name={icon} />
      )}
      {source == "Octicons" && (
        <Octicons style={{ color: color, fontSize: size }} name={icon} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 60,
    height: 60,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: "#fff",
    borderStyle: "solid",
    shadowColor: "#000",
    position: "relative",
    backgroundColor: "#FFE6C9",
    alignItems: "center",
    justifyContent: "center",
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