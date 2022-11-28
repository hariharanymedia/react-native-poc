import { useState, useEffect } from "react";
import { Text, Button, View, StyleSheet } from "react-native";

import { UsersListView } from "../components/UsersListView";

export const GenerateUser = ({
  usersList,
  fetchRandomUser,
  selectUser,
  navigation,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>GIT HUB USERS</Text>
      </View>
      <View style={styles.generateUserContainer}>
        <Button
          title="Generate Random Users"
          color="#000"
          onPress={() => fetchRandomUser()}
        />
      </View>
      {!!usersList && (
        <View style={styles.listContainer}>
          <UsersListView
            usersList={usersList}
            selectUser={selectUser}
            navigation={navigation}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    padding: 32,
  },
  heading: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  generateUserContainer: {
    position: "absolute",
    bottom: 30,
    backgroundColor: "#f5e942",
    borderRadius: 32,
    padding: 6,
  },
  listContainer: {
    width: "100%",
    height: "85%",
    borderRadius: 8,
  },
});
