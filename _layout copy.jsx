import { Slot, Stack, useRouter, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; 
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { View, Text } from "react-native";

  export default Layout = () => {
    const router = useRouter();

    return (
      <>
        <Stack
          screenOptions={{
            headerRight: () => (
              <Ionicons
                name="ios-chatbox-ellipses-outline"
                size={24}
                color="#D9D9D9"
                onPress={() => {
                  router.push("/");
                }}
              />
            ),
            title: "",
            headerLeft: () => (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  columnGap: 10,
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
                <Text>M'aime</Text>
              </View>
            ),
          }}
        ></Stack>
      </>
    );
  }