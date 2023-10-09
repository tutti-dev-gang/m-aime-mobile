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
              photo={user.photo}
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
        columnGap: 20,
        justifyContent: "center",
        paddingVertical: 20,
    },
    
});
