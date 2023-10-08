import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

// const image = { uri: "https://plus.unsplash.com/premium_photo-1673038752584-0f1468d65137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80" };
// https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80
const image = { uri: "https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80" };
const ProfileCard = ({count, name, description, photos, ...props}) => (
  <View style={styles.container}>
    <View style={styles.profile_card}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.card_info_container}>
          <LinearGradient
            colors={["transparent", "rgba(0,0,0,0.8)", "rgba(0,0,0,1)"]}
            style={styles.card_info}
          >
            <View>
              <View style={styles.card_info_header}>
                <Text style={styles.profile_name}>
                    {name},
                    <Text style={{ fontWeight: "normal"}}> {count}</Text>
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
    // height: 200,
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

export default ProfileCard;