import { React, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import SquareButton from "../components/SquareButton";

export default function Home() {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" hidden={false} />
      <Text>Count: {count}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: "100%",
        }}
      >
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
