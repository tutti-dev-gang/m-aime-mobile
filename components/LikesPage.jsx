import { React, useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import SmallCard from "./SmallCard";

export default function LikePage({users}) {
  return (
    <ScrollView style={styles.scroll_container}>
      <View style={styles.container}>
        {users != null ? (
          users.map((user) => (
            <SmallCard
              key={user.id}
              name={user.name}
              photo={user.photos[0]?.photo_url}
              blurIsActive={true}
              showName={true}
            />
          ))
        ) : (
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              Aucun like
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    scroll_container: {
        flex: 1,
    },
    container: {
        flexWrap: "wrap",
        flexDirection: "row",
        rowGap: 20,
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    
});
