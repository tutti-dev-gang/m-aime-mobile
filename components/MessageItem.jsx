import { React } from "react";
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
// import SmallCard from "./SmallCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default LikePage = ({ user }) => {
    const router = useRouter()
    return (
        <Pressable style={styles.container} onPress={() => router.push("/")}>
        <View style={styles.imageContainer}>
            {!user && <FontAwesome5 name="heart" size={32} color="#FF8484" />}
        </View>
        <View style={styles.card_info}>
            <Text style={styles.profile_name}>
                {user ? user.name : "John Doe"}
            </Text>
            <Text style={styles.message} numberOfLines={1}>
                {user ? user.message : "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
            </Text>
        </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#FFF",
    width: "100%",
    borderRadius: 16,
    height: 90,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    elevation: 2,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#FFE6C9",
    justifyContent: "center",
    alignItems: "center",
    
    
  },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    card_info: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    profile_name: {
        color: "#000",
        fontSize: 20,
        fontWeight: "bold",
    },
    message: {
        color: "#D9D9D9",
        fontSize: 16,
        
    },
});
