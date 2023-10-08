import { React, useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

import SquareButton from "../components/SquareButton";
import BackgroundWave from "../components/BackgroundWave";

export default function HomePage() {

  const [count, setCount] = useState(0);
  return (
    <BackgroundWave>
      <View style={styles.container}>
        <Text style={styles.text}>{count}</Text>
        <View style={styles.btns_container}>
          <SquareButton
            icon="heart"
            color={"#AFE9AA"}
            border={true}
            size={32}
            onPress={() => {
              setCount(count + 1);
            }}
          />
          <SquareButton
            icon="close"
            color={"#FCAEAC"}
            border={false}
            size={32}
            onPress={() => {
              setCount(count - 1);
            }}
          />
        </View>
      </View>
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
  btns_container: {
    height: 100,
    width: "100%",
    zIndex: 1000,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 120,
    bottom: -70,
    alignItems: "center",
    position: "absolute",
  },
});
