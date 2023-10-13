import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import BackgroundWave from "../components/BackgroundWave";

import { connect } from "react-redux";
import { GET_USER_REQUESTED } from "../redux/actions/user-action";
import SquareButton from "../components/SquareButton";

const ProfilePage = ({user: { loading, user }, getUser}) => {
   
  useEffect(() => {
    getUser(1);
  }, []);

  return (
    <BackgroundWave>
      <View style={styles.container}>
        <View
          style={{ justifyContent: "center", alignItems: "center", rowGap: 10 }}
        >
          <View style={styles.profileContainer}>
            <View style={styles.profileImage}>
              <ImageBackground
                source={{
                  uri: user.photos.find((photo) => photo.is_main).photo_url,
                }}
                resizeMode="cover"
                style={styles.image}
              />
            </View>
          </View>
          <Text style={styles.username}>{user.name}</Text>
        </View>
        <View style={styles.btnsContainer}>
          <SquareButton
            icon="gear"
            color={"#FF8484"}
            size={32}
            source="Octicons"
          />
          <SquareButton
            icon="pencil"
            color={"#FF8484"}
            size={32}
            source="Octicons"
          />
        </View>
      </View>
    </BackgroundWave>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch({ type: GET_USER_REQUESTED, payload: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);



const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FFE6C9",
    alignItems: "center",
    rowGap: 20,
    padding: 20,
  },
  profileContainer: {
    borderRadius: 100,
    width: 150,
    height: 150,
    borderColor: "#FF8484",
    borderStyle: "solid",
    borderWidth: 4,
    padding: 6,
  },
  profileImage: {
    backgroundColor: "#000",
    flex: 1,
    borderRadius: 100,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
  },
  btnsContainer: {
    flexDirection: "row",
    flex: 1,
    columnGap: 20,
  }
});
