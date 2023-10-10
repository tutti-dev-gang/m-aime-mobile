import { Tabs, useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons"; 
import { View, Text, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store from "../redux/store";

export default () => {
  const router = useRouter();
  return (
    <Provider store={store}>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#FF8484",
          tabBarInactiveTintColor: "#D9D9D9",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0,
            shadowColor: "transparent",
            elevation: 0,
            justifyContent: "center",
            alignItems: "center",
          },
          title: "",
          headerStyle: {
            backgroundColor: "#fff",
            borderBottomWidth: 1,
            borderBottomColor: "#D9D9D9",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          },
          headerRight: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                columnGap: 10,
                paddingRight: 20,
              }}
            >
              <Ionicons
                name="ios-chatbox-ellipses-outline"
                size={24}
                color="#D9D9D9"
                onPress={() => {
                  router.push("/");
                }}
              />
            </View>
          ),
          headerLeft: () => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                columnGap: 10,
                paddingLeft: 20,
              }}
            >
              <FontAwesome5
                name="heart"
                size={32}
                color="#FF8484"
                onPress={() => {
                  router.push("/");
                }}
              />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                M'aime
              </Text>
            </View>
          ),
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, tabBarActive }) => (
              <View style={styles.btn_container}>
                <FontAwesome5 name="heart" size={24} color={color} />
                {color == "#FF8484" && <Entypo name="minus" size={24} color={color} />}
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="EventsPage"
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.btn_container}>
                <FontAwesome5 name="bell" size={24} color={color} />
                {color == "#FF8484" && <Entypo name="minus" size={24} color={color} />}
              </View>
            ),
          }}
        />

        <Tabs.Screen
          name="ProfilePage"
          options={{
            tabBarIcon: ({ color }) => (
              <View style={styles.btn_container}>
                <FontAwesome5 name="user" size={24} color={color} />
                {color == "#FF8484" && <Entypo name="minus" size={24} color={color} />}
              </View>
            ),
          }}
        />
      </Tabs>
    </Provider>
  );
};

const styles = StyleSheet.create({
  btn_container: {
    flexDirection: "column",
    alignItems: "center",
    columnGap: 10,
    height: 50,
  },
});
