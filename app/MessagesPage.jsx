import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import BackgroundWave from "../components/BackgroundWave";
import EventsHeader from "../components/EventsHeader";
import LikePage from "../components/LikesPage";
import MessageItem from "../components/MessageItem";

import { connect } from "react-redux";

import { GET_USERS_REQUESTED } from "../redux/actions/user-action";
import SmallCard from "../components/SmallCard";

const MessagesPage = ({ user: { loading, users }, getUsers }) => {
  const [pageActive, setPageActive] = useState("like");
  const handleClick = (page) => {
    setPageActive(page);
  };


  useEffect(() => {
    getUsers();
  }, []);


  return (
    <BackgroundWave>
      <View style={styles.container}>
        <ScrollView horizontal={true} style={styles.usersListSCroll}>
          <View style={styles.usersList}>
            {users &&
              users.map((user) => (
                <SmallCard
                  key={user.id}
                  height={"100%"}
                  width={120}
                  photo={user.photos[0]?.photo_url}
                  blurIsActive={false}
                  showName={false}
                />
              ))}
          </View>
        </ScrollView>
        <ScrollView style={styles.messagesListScroll}>
          <View style={styles.messagesList}>
            <MessageItem />
            {users &&
              users.map((user) => <MessageItem key={user.id} user={user} />)}
          </View>
        </ScrollView>
      </View>
    </BackgroundWave>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    zIndex: 100,
  },
  usersListSCroll: {
    height: "30%",
  },
  usersList: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    columnGap: 10,
  },
  messagesListScroll: {
    height: "70%",
    paddingHorizontal: 10,
  },
  messagesList: {
    flex: 1,
    flexDirection: "column",
    rowGap: 10,
    alignItems: "center",    
    paddingVertical: 10,
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
