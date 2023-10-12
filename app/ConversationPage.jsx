import { React, useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import BackgroundWave from "../components/BackgroundWave";
import { useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


import { connect } from "react-redux";
import {
    GET_USER_REQUESTED,
} from '../redux/actions/user-action';
import ConversationHeader from "../components/ConversationHeader";

const ConversationPage = ({ user: { loading, user }, getUser }) => {
  const params = useLocalSearchParams();
  const { id } = params;
  
  useEffect(() => {
    getUser(id ?? 1);
  }, [id]);

  
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFE6C9",
      }}
    >
      <ConversationHeader user={user} />
      <ScrollView>
        <View>
          <View style={styles.messageWrapper}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={styles.message}>
                <Text>
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[
              styles.messageWrapper,
              {
                alignItems: "flex-end",
                justifyContent: "flex-end",
              },
            ]}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={[
                  styles.message,
                  {
                    backgroundColor: "#AFE9AA",
                  },
                ]}
              >
                <Text>
                  {
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  }
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {user && <View style={styles.inputWrapper}>
        <TextInput style={styles.input} />
        <View style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#D9D9D9" />
        </View>
      </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  messageWrapper: {
    justifyContent: "space-between",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  message: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#D9D9D9",
  },
  input: {
    width: "80%",
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    padding: 10,
  },
  sendButton: {
    backgroundColor: "#F2F2F2",
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});


const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => dispatch({ type: GET_USER_REQUESTED, payload: id }),
});


export default connect(mapStateToProps, mapDispatchToProps)(ConversationPage);

