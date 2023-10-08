import { React, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import BackgroundWave from "../components/BackgroundWave";

export default function EventsPage() {
  return (
    <BackgroundWave>
      <View style={styles.container}></View>
    </BackgroundWave>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    position: "relative",
    zIndex: 100,
    justifyContent: "flex-end",
  },
});
