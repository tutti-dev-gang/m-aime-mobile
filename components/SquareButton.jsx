import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function SquareButton({ icon, onPress, color, size, border, ...props}) {
  return (
    <Pressable
      style={[styles.button, styles.shadowProp, styles.elevation]}
      onPress={onPress}
      {...props}
    >
      {border ? (
        <>
          <FontAwesome style={{ color: "#FFF", fontSize: size }} name={icon} />
          <FontAwesome
            style={[styles.iconChild, { color: color }]}
            name={icon}
          />
        </>
      ) : (
        <FontAwesome style={{ color: color, fontSize: size }} name={icon} />
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
  iconChild: {
    position: "absolute",
    fontSize: 28,
    alignItems: "center",
    justifyContent: "center",
},
});