import { React, useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import Wave from "../assets/Wave";

export default function HomePage({ children, ...props}) {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container} {...props}>
      <View
        style={{ flex: 1, position: "relative", backgroundColor: "#FFE6C9" }}
      >
        <Wave style={styles.image} width="100%" height="100" />
        <View>{children}</View>
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    position: "relative",
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
    position: "absolute",
    bottom: -80,
    // zIndex: 100,
    objectFit: "cover",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  bottom: {
    width: "100%",
    height: 100,
    backgroundColor: "transparent",
    zIndex: -1,
    }
});
