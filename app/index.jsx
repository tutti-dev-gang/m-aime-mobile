import { React, useState } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

import SquareButton from "../components/SquareButton";
import BackgroundWave from "../components/BackgroundWave";
import ProfileCard from "../components/ProfileCard";

export default function HomePage() {

  const [count, setCount] = useState(20);
  return (
    <BackgroundWave>
      <View style={styles.container}>
        <ProfileCard
          count={count}
          name="Jane Doe"
          description="Donec non augue id elit tincidunt aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          photos={[
            "https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
            "https://plus.unsplash.com/premium_photo-1673038752584-0f1468d65137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80",
          ]}
        />
        <View style={styles.btns_container}>
          <SquareButton
            icon="heart"
            color={"#AFE9AA"}
            border={false}
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
    // position: "relative",
    // zIndex: 100,
    // justifyContent: "flex-end",
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
