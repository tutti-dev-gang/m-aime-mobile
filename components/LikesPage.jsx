import { React } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import SmallCard from "./SmallCard";

export default function LikePage({users}) {
  return (
    <ScrollView style={styles.scroll_container}>
      <View style={styles.container}>
        <View style={styles.flexContainer}>
          {users != null ? (
            users.map((user) => (
              <SmallCard
                key={user.id}
                name={user.name}
                photo={user.photos[0]?.photo_url}
                blurIsActive={true}
                showName={true}
                height={220}
                width={160}
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
    justifyContent: "center",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  flexContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    rowGap: 20,
    justifyContent: "space-between",
    width: 160 * 2 + 20,
  },
});
