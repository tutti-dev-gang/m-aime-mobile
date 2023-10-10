import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import BackgroundWave from "../components/BackgroundWave";
import EventsHeader from "../components/EventsHeader";
import LikePage from "../components/LikesPage";

import { connect } from 'react-redux'

import {
    GET_USERS_REQUESTED,
} from '../redux/actions/user-action'

const  EventsPage = ({ user: { loading, users }, getUsers}) => {
  const [pageActive, setPageActive] = useState("like");
  const handleClick = (page) => {
    setPageActive(page);
  };

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <BackgroundWave>
        <View style={styles.container}>
          <EventsHeader
            usersCount={users?.length ?? 0}
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

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    getUsers: () => dispatch({ type: GET_USERS_REQUESTED }),
})

export default connect(mapStateToProps, mapDispatchToProps)(EventsPage)
