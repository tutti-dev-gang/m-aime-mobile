import { React } from "react";
import { StyleSheet, View } from "react-native";
import Wave from "../assets/Wave";

export default function BackgroundWave({ children, ...props }) {
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
    objectFit: "cover",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  bottom: {
    width: "100%",
    height: 100,
    backgroundColor: "transparent",
    zIndex: -1,
    }
});
