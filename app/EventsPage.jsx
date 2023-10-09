import { React, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundWave from "../components/BackgroundWave";
import EventsHeader from "../components/EventsHeader";
import LikePage from "../components/LikesPage";

export default function EventsPage() {
  const [pageActive, setPageActive] = useState("like");
  const handleClick = (page) => {
    setPageActive(page);
  };
  const photos = [
    "https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    "https://plus.unsplash.com/premium_photo-1673038752584-0f1468d65137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80",
  ];
  const users = [
    { id: 1, name: "John", photo: photos[0] },
    { id: 2, name: "Jane", photo: photos[1] },
    { id: 3, name: "John", photo: photos[0] },
    { id: 4, name: "Jane", photo: photos[1] },
    { id: 5, name: "John", photo: photos[0] },
    { id: 6, name: "Jane", photo: photos[1] },
  ];
  
  return (
    <BackgroundWave>
      <View style={styles.container}>
        <EventsHeader
          usersCount={users.length}
          pageActive={pageActive}
          handleClick={handleClick}
        />
        {pageActive === "like" ? (
          <LikePage users={users} />
        ) : (
          <Text>Mes super likes</Text>
        )}
      </View>
    </BackgroundWave>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    zIndex: 100,
  },
});
