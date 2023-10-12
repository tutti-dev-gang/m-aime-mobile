import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import FOntAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Redirect, useRouter } from "expo-router";

import MaimeButton from "../components/MaimeButton";

import { connect } from "react-redux";
import { GET_USER_REQUESTED } from "../redux/actions/user-action";

const LoginPage = (
    // { user: { loading, user }, getUser }
    ) => {

    const [pageActive, setPageActive] = useState("home");
    const [text, onChangeText] = useState("");
    const [isAuth, setIsAuth] = useState(false);
    const router = useRouter();

  useEffect(() => {
  }, []);

  return isAuth ? (<Redirect href={'/'}/>):(
    <View style={styles.allContainer}>
      {pageActive == "home" && (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <FOntAwesome5 name="heart" size={64} color="#FF8484" />
            </View>
            <Text style={styles.text}>Bienvenue sur Maime</Text>
          </View>
          <View style={styles.btnContainer}>
            <MaimeButton
              text="Se connecter"
              onPress={() => {
                setPageActive("login");
              }}
            />
            <MaimeButton
              text="S'inscrire"
              onPress={() => {
                setPageActive("register");
              }}
            />
          </View>
        </View>
      )}
      {pageActive == "login" && (
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <FOntAwesome5 name="heart" size={64} color="#FF8484" />
            </View>
            <Text style={styles.text}>Bienvenue sur Maime</Text>
          </View>
          <View style={styles.loginContainer}>
            <TextInput
                style={styles.input}
                placeholder="Numéro de téléphone"
                keyboardType="numeric"
                onChangeText={onChangeText}
                />
            <MaimeButton
                text="Continuer"
                disabled={text.length === 0}
                onPress={() => {
                    text.length !== 0 &&
                      (onChangeText(""),
                      setIsAuth(true),
                      router.push({
                        pathname: "/",
                        params: { isAuth: true },
                      }));
                }}
                />
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    rowGap: 100,
    width: "100%",
  },

  header: {
    alignItems: "center",
    justifyContent: "center",
    rowGap: 20,
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE6C9",
    borderRadius: 100,
    width: 100,
    height: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    elevation: 2,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF8484",
    opacity: 0.5,
  },
  btnContainer: {
    width: "100%",
    paddingHorizontal: 20,
    rowGap: 20,
    justifyContent: "space-between",
  },
  loginContainer: {
    width: "100%",
    paddingHorizontal: 20,
    rowGap: 20,
    justifyContent: "space-between",
  },
    input: {
        height: 60,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: "#fff",
        borderStyle: "solid",
        shadowColor: "#000",
        backgroundColor: "#FFE6C9",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
});

const mapStateToProps = (state) => ({
//   user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
//   getUser: (id) => dispatch({ type: GET_USER_REQUESTED, payload: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
