import React from "react";
import {Pressable, StyleSheet, Text, View } from "react-native";

export default EventsHeader = ({ usersCount, pageActive, handleClick }) => {
  const likePageIsActive = pageActive === "like";
  const favoritePageIsActive = pageActive === "favorite";

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.header_btn}
        onPress={() => {
          handleClick("like");
        }}
      >
        <Text
          style={[
            styles.header_btn_text,
            { color: likePageIsActive ? "#FF8484" : "#000" },
          ]}
        >
          {usersCount} Likes
        </Text>
      </Pressable>
      <View style={styles.separator}></View>
      <Pressable
        style={styles.header_btn}
        onPress={() => {
          handleClick("favorite");
        }}
      >
        <Text
          style={[
            styles.header_btn_text,
            { color: favoritePageIsActive ? "#FF8484" : "#000" },
          ]}
        >
          Mes super likes
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: "#FFF",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#D9D9D9",
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
    },
    header_btn: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header_btn_text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    separator: {
        width: 1,
        backgroundColor: "#D9D9D9",
    },
}); 
