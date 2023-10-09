import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundWave from "../components/BackgroundWave";
import EventsHeader from "../components/EventsHeader";
import LikePage from "../components/LikesPage";
import axios from "axios";

export default function EventsPage() {
  const [pageActive, setPageActive] = useState("like");
  const handleClick = (page) => {
    setPageActive(page);
  };
  const photos = [
    "https://plus.unsplash.com/premium_photo-1675129626434-867201a9374d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    "https://plus.unsplash.com/premium_photo-1673038752584-0f1468d65137?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2786&q=80",
  ];
  const baseUrl = "http://192.168.113.6:8000";
  const [users, setUsers] = useState([]);

  const fetchUser = async () => {
    const url = `${baseUrl}/api/v1/users`;
    const response = await axios.get(url);
    setUsers(response.data);
    console.log(response.data);
  };
  useEffect(() => {
     fetchUser();

  }, []);

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
          <Text>{"Page en construction" ?? "Mes super likes"}</Text>
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
