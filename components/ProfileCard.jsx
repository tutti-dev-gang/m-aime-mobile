import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default ProfileCard = ({
  count,
  name,
  description,
  photos,
  ...props
}) => (
  <View style={styles.container}>
    <View style={styles.profile_card}>
      <ImageBackground
        source={{ uri: photos[0] }}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.card_info_container}>
          <LinearGradient
            colors={[
              "transparent",
              "rgba(0,0,0,0.2)",
              "rgba(0,0,0,0.5)",
              "rgba(0,0,0,0.8)",
              "rgba(0,0,0,1)",
            ]}
            style={styles.card_info}
          >
            <View>
              <View style={styles.card_info_header}>
                <Text style={styles.profile_name}>
                  {name},<Text style={{ fontWeight: "normal" }}> {count}</Text>
                </Text>
                <MaterialIcons name="info-outline" size={24} color="white" />
              </View>
              <View style={styles.card_info_body}>
                <Text style={styles.profile_description} numberOfLines={3}>
                  {description}
                </Text>
              </View>
            </View>
          </LinearGradient>
        </View>
      </ImageBackground>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profile_card: {
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  card_info_container : {
    width: "100%",
    minHeight: 150,
    maxHeight: 200,
  },
  card_info: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "100%",
  },
    card_info_header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    profile_name: {
        color: "white",
        fontSize: 32,
        fontWeight: "bold",
    },
    card_info_body: {
        marginTop: 20,
    },
    profile_description: {
        color: "white",
        fontSize: 16,
    },

});

