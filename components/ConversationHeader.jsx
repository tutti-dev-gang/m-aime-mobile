import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";


export default ConversationHeader = ({user}) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.headerLeftContainer}>
        <Pressable
          onPress={() => {
            router.push("/MessagesPage");
          }}
        >
          <Ionicons name="arrow-back" size={32} color="#D9D9D9" />
        </Pressable>
        <View style={styles.headerLeft}>
          {user ? (
            <View style={styles.headerLeft}>
              <Image
                source={{ uri: user.photos[0]?.photo_url }}
                style={styles.image}
              />
              <Text style={styles.headerLeftText}>{user.name}</Text>
            </View>
          ) : (
            <View style={styles.headerLeft}>
              <View style={styles.image}>
                <FontAwesome5 name="heart" size={24} color="#FF8484" />
              </View>
              <Text style={styles.headerLeftText}>M'aime</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
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
  headerLeftContainer: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerLeftText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#FFE6C9",
    justifyContent: "center",
    alignItems: "center",
  },
}); 
