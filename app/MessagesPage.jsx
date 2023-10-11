import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundWave from "../components/BackgroundWave";
import EventsHeader from "../components/EventsHeader";
import LikePage from "../components/LikesPage";
import MessageItem from "../components/MessageItem";

import { connect } from "react-redux";

import { GET_USERS_REQUESTED } from "../redux/actions/user-action";

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
        <View style={styles.usersList}>
        </View>
        <View style={styles.messagesList}>
          <MessageItem />
        </View>
      </View>
    </BackgroundWave>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    zIndex: 100,
  },
  usersList: {
    height: "30%",
    backgroundColor: "#FFF",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  messagesList: {
    height: "70%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
});

export default connect(mapStateToProps, mapDispatchToProps)(MessagesPage);
