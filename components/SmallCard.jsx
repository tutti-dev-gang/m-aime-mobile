import { React, useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView, ImageBackground } from "react-native";

export default function SmallCard({ name, photo, blurIsActive, showName, ...props }) {
  return (
    <View style={[styles.container, {
      height: props.height,
      width: props.width,
    }]}>
      <ImageBackground
        source={{ uri: photo }}
        resizeMode="cover"
        style={styles.image}
        blurRadius={blurIsActive ? 40 : 0}
      >
        {showName && !blurIsActive && (
          <View style={styles.card_info_container}>
            <View style={styles.card_info}>
              <Text style={styles.profile_name}>{name}</Text>
            </View>
          </View>
        )}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#ccc",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  card_info_container: {
    width: "100%",
    minHeight: 40,
},
  card_info: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 10,
  },
  profile_name: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
