import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { Redirect, useLocalSearchParams } from "expo-router";

import SquareButton from "../components/SquareButton";
import BackgroundWave from "../components/BackgroundWave";
import ProfileCard from "../components/ProfileCard";

import { connect } from 'react-redux'
import {
    GET_USER_REQUESTED,
} from '../redux/actions/user-action'
import LoginPage from "./LoginPage";



const HomePage = ({user: { loading, user }, getUser}) => {
  const params = useLocalSearchParams();
  const {isAuth} = params;
  const [count, setCount] = useState(1);
  
  useEffect(() => {
      getUser(count)
    }, [
      count,
    ])
  

  return !isAuth ? (
    <Redirect href="/LoginPage" />
  ) : (
    <BackgroundWave>
      {loading ? (
        <View style={styles.loaderContainer}>
          <Text style={styles.loaderText}>Chargement...</Text>
        </View>
      ) : (
        user && (
          <View style={[styles.container]}>
            <ProfileCard user={user} count={count} />
            <View style={styles.btns_container}>
              <SquareButton
                icon="heart"
                color={"#AFE9AA"}
                border={false}
                size={32}
                onPress={() => {
                  setCount(count == 20 ? count : count + 1);
                }}
              />
              <SquareButton
                icon="close"
                color={"#FF8484"}
                border={false}
                size={32}
                onPress={() => {
                  setCount(count == 1 ? count : count - 1);
                }}
              />
            </View>
          </View>
        )
      )}
    </BackgroundWave>
  );
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = (dispatch) => ({
    getUser: (id) => dispatch({ type: GET_USER_REQUESTED , payload: id}),
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)


const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  btns_container: {
    height: 100,
    width: "100%",
    zIndex: 1000,
    flexDirection: "row",
    justifyContent: "center",
    columnGap: 120,
    bottom: -70,
    alignItems: "center",
    position: "absolute",
  },

  loaderContainer: {
    position: "absolute",
    width: "100%",
    height: Dimensions.get("window").height - 120,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    textAlign: "center",
  },
  loaderText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF8484",
  },
});
